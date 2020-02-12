package com.codeup.mentor.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class InterestsController{


    @GetMapping("/signup/{interests}")
    public String intertests(@PathVariable String interests, Model model){
        model.addAttribute("interests", interests);
        return "signup";
    }
}
