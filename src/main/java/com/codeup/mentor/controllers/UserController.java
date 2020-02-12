package com.codeup.mentor.controllers;


import com.codeup.mentor.model.User;
import com.codeup.mentor.repositories.UserRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import javax.persistence.GeneratedValue;


@Controller
public class UserController {
    private UserRepository userDao;
//    private PasswordEncoder passwordEncoder;

    public UserController(UserRepository userDao
//    , PasswordEncoder passwordEncoder

    ){
        this.userDao = userDao;
//        this.passwordEncoder = passwordEncoder;

    }


    @GetMapping("/")
    public String showSplashPage(){
        return "splash";
    }


    @GetMapping("/signup")
    public String showSignupForm(Model model){
        model.addAttribute("user", new User());
        return "signUp";
    }

    @GetMapping("/home")
    public String showHomePage(){
        return "home";
    }

    @PostMapping("/signup")
    public String saveUser(@ModelAttribute User user){
//        String hash = passwordEncoder.encode(user.getPassword());
//        user.setPassword(hash);
//        users.save(user);
        return "home";
    }

    //    navbar partial test is below - can replace with OTHER PARTIALS IF NEEDED
//    @GetMapping("/navbarTest")
//    public String navbarTest(){
//        return "partials/navbar";
//    }


}
