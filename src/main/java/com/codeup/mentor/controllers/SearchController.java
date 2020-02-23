package com.codeup.mentor.controllers;

import com.codeup.mentor.model.User;
import com.codeup.mentor.repositories.UserRepository;
import com.codeup.mentor.services.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@Controller
public class SearchController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RatingService ratingService;


    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public String getSearchResults(@RequestParam String myInput, @RequestParam boolean isMentor, User user, Model model) {
        List<User> userList = new ArrayList<>();
        Set<User> mentorOrMenteeUser;
        List<User> users = userRepository.findUsersByFirst_nameOrLast_nameOrLocation('%' + myInput + '%');


        if (!users.isEmpty()) {

            if (isMentor) {
                mentorOrMenteeUser = users.stream().filter(User::isIs_mentor).collect(Collectors.toSet());

            } else {

                mentorOrMenteeUser = users.stream().filter(user1 -> !user1.isIs_mentor()).collect(Collectors.toSet());

            }


            for (User userer : mentorOrMenteeUser) {
                if (!userList.contains(userer)) {

                    userer.setRating(ratingService.allRatingsOnSearch(userer.getId()));
                    userList.add(userer);
                }
            }
            model.addAttribute("myInput", myInput);
            model.addAttribute("users", userList);
            return "search";
        }

        model.addAttribute("myInput", myInput);
        model.addAttribute("users", users);

        return "search";
    }

}