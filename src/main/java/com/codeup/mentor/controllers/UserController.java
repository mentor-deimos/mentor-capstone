package com.codeup.mentor.controllers;

@Controller
public class UserController {
    @GetMapping("/signup")
    public String signup(){
        return "signup";
    }
}
