package com.codeup.mentor.controllers;


import com.codeup.mentor.model.Interest;
import com.codeup.mentor.model.Rating;
import com.codeup.mentor.model.User;
import com.codeup.mentor.repositories.InterestRepository;
import com.codeup.mentor.repositories.RatingRepository;
import com.codeup.mentor.repositories.UserRepository;
import com.codeup.mentor.services.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;

import javax.persistence.GeneratedValue;
import java.security.Principal;
import java.util.List;


@Controller
public class UserController {


    private String uploadHandle;



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
    public String saveUser(@ModelAttribute User user) {
        String hash = passwordEncoder.encode(user.getPassword());
        user.setPassword(hash);
        userDao.save(user);

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
    public String goToProfile(Model model, Principal principal){
        if (principal != null){
            User user = userDao.findByUsername(principal.getName());
            model.addAttribute("user", user);
            model.addAttribute("rating", ratingService.allRatingsOnSearch(2));
            return "profile";
        }
        return "/splash";


    }


    @GetMapping("/about")
    public String goToAbout(){


        return "about";
    }
}




