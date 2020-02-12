package com.codeup.mentor.controllers;


import com.codeup.mentor.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {
    private User users;
//    private PasswordEncoder passwordEncoder;

    public UserController(User users
//    , PasswordEncoder passwordEncoder

    ){
        this.users = users;
//        this.passwordEncoder = passwordEncoder;

    }

    @GetMapping("/signup")
    public String showSignupForm(Model model){
        model.addAttribute("user", new User());
        return "users/signup";
    }

    @PostMapping("/signup")
    public String saveUser(@ModelAttribute User user){
//        String hash = passwordEncoder.encode(user.getPassword());
//        user.setPassword(hash);
//        users.save(user);
        return "home";
    }


}
