package com.codeup.mentor.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SearchController {

    @GetMapping("/search")
    public String Testing(){
        return "test";
    }

    @GetMapping("/search/${myInput}")
    public String ReturnTheInput(){
        return "this should return the input from the navbar";
    }
}
