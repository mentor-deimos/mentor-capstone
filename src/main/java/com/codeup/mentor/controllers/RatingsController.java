package com.codeup.mentor.controllers;

import com.codeup.mentor.model.Rating;
import com.codeup.mentor.model.User;
import com.codeup.mentor.repositories.RatingRepository;
import com.codeup.mentor.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class RatingsController {

    RatingRepository ratingDao;
    UserRepository userDao;

    public RatingsController(RatingRepository ratingDao, UserRepository userDao){
        this.userDao = userDao;
        this.ratingDao = ratingDao;
    }


    @PostMapping("/rating")
    public String postRating(@ModelAttribute Rating rating, @RequestParam(name="hiddenID") long idreceiver){
        User giverUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();


        rating.setGiver_info(userDao.getOne(giverUser.getId()));
        rating.setReceiver_info(userDao.getOne(idreceiver));
        ratingDao.save(rating);



        return "redirect:/profile/" + idreceiver;
    }

}
