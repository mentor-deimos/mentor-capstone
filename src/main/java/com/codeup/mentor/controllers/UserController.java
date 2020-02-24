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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;


@Controller
public class UserController {

    private UserRepository userDao;

    private InterestRepository interestDao;

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
        ;
        List<Interest> interestList = new ArrayList<>();
        model.addAttribute("interests", interestDao.findAll());
        model.addAttribute("filestackapi", filestackapi);
        model.addAttribute("user", new User());
        model.addAttribute("interestlist", interestList);

        return "signUp";
    }

    @PostMapping("/signup")
    public String saveUser(@ModelAttribute User user, @RequestParam(name = "interests") List<Interest> interestList) {

        String hash = passwordEncoder.encode(user.getPassword());
        user.setPassword(hash);
        user.setInterestList(interestList);
        System.out.println("user.getFilestack_picture_url() = " + user.getFilestack_picture_url());

        if (user.getFilestack_picture_url().length() == 0) {
            user.setFilestack_picture_url("CHefhssjQ5uQ41Ws4jxy");
        }


        userDao.save(user);

        return "redirect:/";
    }


    @GetMapping("/about")
    public String goToAbout() {


        return "about";
    }


    @GetMapping("/splash")
    public String goToSplashPage() {

        return "splash";
    }
}




