package com.codeup.mentor.controllers;


import com.codeup.mentor.model.Interest;
import com.codeup.mentor.model.User;
import com.codeup.mentor.repositories.InterestRepository;
import com.codeup.mentor.repositories.UserRepository;
import com.codeup.mentor.services.RatingService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;




@Controller
public class UserController {

    //    repos
    private UserRepository userDao;
    private InterestRepository interestDao;

    private RatingService ratingService;
    private PasswordEncoder passwordEncoder;


    //    wired up filestack api through MVC - kh
    @Value("${filestack.api.key}")
    private String filestackapi;

    public UserController(UserRepository userDao, PasswordEncoder passwordEncoder, InterestRepository interestDao) {
        this.userDao = userDao;
        this.passwordEncoder = passwordEncoder;
        this.interestDao = interestDao;
    }


    @GetMapping("/")
    public String showSplashPage() {
        return "splash";
    }


    @GetMapping("/signup")
    public String showSignupForm(Model model) {

        model.addAttribute("interests", interestDao.findAll());
        model.addAttribute("filestackapi", filestackapi);
        model.addAttribute("user", new User());
        return "signUp";
    }

    @PostMapping("/signup")
    public String saveUser(@ModelAttribute User user, @RequestParam(name = "interests") String interestsID) {
        String hash = passwordEncoder.encode(user.getPassword());
        String[] splitinterestsID = interestsID.split(",");
        for (String interest : splitinterestsID){
            user.getInterestList().add(interestDao.findById(parseInt(interest)))
        }
        user.setPassword(hash);
        userDao.save(user)

//        String[] interestsIDarr;
//
//
//        Long lastCreated = userDao.findTopByOrderByIdDesc().getId();
//       interestsIDarr = interestsID.split(",");
//       for (String interest : interestsIDarr){
//
//       }
//        System.out.println("interestsID = " + interestsID);


        return "home";
    }

    @GetMapping("/profile")
    public String goToProfile(Model model) { //needs @PathVariable long id,
//        model.addAttribute("rating", ratingService.allRatingsOnSearch(2));
        return "profile";
    }


    @GetMapping("/about")
    public String goToAbout() { //needs @PathVariable long id,

        return "about";
    }
}




