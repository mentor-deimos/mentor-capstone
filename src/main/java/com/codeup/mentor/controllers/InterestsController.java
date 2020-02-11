package com.codeup.mentor.controllers;

@Controller
public class InterestsController{


    @GetMapping("/signup/{interests}")
    public String intertests(@PathVariable String interests, Model model){
        model.addAttribute("interests", interests);
        return "signup";
    }
}
