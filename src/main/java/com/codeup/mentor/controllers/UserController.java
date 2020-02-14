package com.codeup.mentor.controllers;


import com.codeup.mentor.model.Rating;
import com.codeup.mentor.model.User;
import com.codeup.mentor.repositories.RatingRepository;
import com.codeup.mentor.repositories.UserRepository;
import com.codeup.mentor.services.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import javax.persistence.GeneratedValue;
import java.util.List;


@Controller
public class UserController {
    @Autowired
    private UserRepository userDao;
    @Autowired
    private RatingService ratingService;

//    private PasswordEncoder passwordEncoder;

//    public UserController(UserRepository userDao
////    , PasswordEncoder passwordEncoder
//
//    ){
//        this.userDao = userDao;
////        this.passwordEncoder = passwordEncoder;
//
//    }


    @GetMapping("/")
    public String showSplashPage(){
        return "splash";
    }


    @GetMapping("/signup")
    public String showSignupForm(Model model){
        model.addAttribute("user", new User());
        return "signUp";
}

//    @GetMapping("/home")
//    public String showHomePage(){
//        return "home";
//    }

    @PostMapping("/signup")
    public String saveUser(@ModelAttribute User user){
//        String hash = passwordEncoder.encode(user.getPassword());
//        user.setPassword(hash);
        userDao.save(user);
        return "home";
    }

    @GetMapping("/profile-page")
    public String goToProfile(Model model){ //needs @PathVariable long id,
        model.addAttribute("rating", ratingService.allRatingsOnSearch(2));

        return "profile-page";
    }

    //    navbar partial test is below - can replace with OTHER PARTIALS IF NEEDED
//    @GetMapping("/navbarTest")
//    public String navbarTest(){
//        return "partials/navbar";
//    }


}
