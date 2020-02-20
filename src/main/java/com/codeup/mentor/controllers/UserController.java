package com.codeup.mentor.controllers;


import com.codeup.mentor.model.Interest;
import com.codeup.mentor.model.Rating;
import com.codeup.mentor.model.User;
import com.codeup.mentor.repositories.InterestRepository;
import com.codeup.mentor.repositories.UserRepository;
import com.codeup.mentor.services.RatingService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;


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

        return "home";
    }

    @GetMapping("/profile")
    public String goToProfile(Model model, Principal principal){
        System.out.println(principal + "**********");
        if (principal != null){
            User user = userDao.findByUsername(principal.getName());
            model.addAttribute("user", user);
            model.addAttribute("rating", ratingService.allRatingsOnSearch());
            return "profile";
        }
        return "/";
    }


    @GetMapping("/about")
    public String goToAbout(){


        return "about";
    }
}




