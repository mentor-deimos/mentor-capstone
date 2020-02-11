package com.codeup.mentor.controllers;

import com.codeup.mentor.model.User;
import com.codeup.mentor.services.SearchService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class SearchController {
    SearchService searchService;

    @GetMapping("/")
    public String home(){
        return "home";
    }

    @GetMapping("/search")
    public String Testing(){
        return "helloworld";
    }


    @RequestMapping(value = "/search/{myInput}", method=RequestMethod.GET)
    public String getSearchResults(@PathVariable String myInput, User user, Model model){
        searchService.searchForUsers(myInput, user.isIs_mentor());
        model.addAttribute("myInput", myInput);

        return "search";
    }
}