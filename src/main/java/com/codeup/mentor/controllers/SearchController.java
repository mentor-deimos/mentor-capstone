package com.codeup.mentor.controllers;

import com.codeup.mentor.model.User;
import com.codeup.mentor.repositories.UserRepository;
import com.codeup.mentor.services.RatingService;
import com.codeup.mentor.services.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
public class SearchController {
    @Autowired
    SearchService searchService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RatingService ratingService;



//    @GetMapping("/")
//    public String home(){
//        return "home";
//    }

//    @GetMapping("/search")
//    public String searchForResults(Model model){
//        model.addAttribute("user", new User());
//        return "search";
//
//    }


    @RequestMapping(value = "/search", method=RequestMethod.GET)
    public String getSearchResults(@RequestParam String myInput, User user, Model model){
        List<User> userList = new ArrayList<>();
        List<User> users = userRepository.findUsersByFirst_nameOrLast_nameOrLocation(myInput);
//        List<User> users = userRepository.findUsersByFirst_nameOrLast_nameOrLocation('\"'+ '%' + myInput + '%' +'\"');
        if (users.isEmpty()){
            users = userRepository.findUsersBysearch(myInput);
        } else if (!users.isEmpty()){
            for (User userer : users){
                userer.setRating(ratingService.allRatingsOnSearch(userer.getId()));
                userList.add(userer);
            }
            model.addAttribute("myInput", myInput);
            model.addAttribute("users", userList);
            return "search";
        }


        searchService.searchForUsers(myInput, user.isIs_mentor());
        model.addAttribute("myInput", myInput);
        model.addAttribute("users", users);



//        model.addAttribute("isIsMentor", user.isIs_mentor());
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