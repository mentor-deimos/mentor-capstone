package com.codeup.mentor.controllers;

import com.codeup.mentor.model.User;
import com.codeup.mentor.services.SearchService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

@Controller
public class SearchController {
    SearchService searchService;

//    @GetMapping("/")
//    public String home(){
//        return "home";
//    }

    @GetMapping("/search")
    public String searchForResults(Model model){
        model.addAttribute("user", new User());
        return "search";

    }


    @RequestMapping(value = "/search/{myInput}&{isIsMentor}", method=RequestMethod.GET)
    public String getSearchResults(@PathVariable String myInput, User user, Model model){
        searchService.searchForUsers(myInput, user.isIs_mentor());
        model.addAttribute("myInput", myInput);
        model.addAttribute("isIsMentor", user.isIs_mentor());

        return "search";
    }

//    String searchTerm = request.getParameter("searchTerm");
//
//    String sql = "SELECT * FROM products WHERE name LIKE ?";
//    String searchTermWithWildcards = "%" + searchTerm + "%";
//
//    PreparedStatement stmt = connection.prepareStatement(sql);
//stmt.setString(1, searchTermWithWildcards);
//
//    ResultSet rs = stmt.executeQuery();
//while(rs.next()) {
//        // do something with the search results
//    }

//    @GetMapping("/search.json")
//    public @ResponseBody
//    List<User> viewAllUsersInJSONFormat() {
//        return users.findAll();
//    }
//
//    @GetMapping("/search/ajax")
//    public String viewAllUsersWithAjax() {
//        return "search/ajax";
//    }
}