package com.codeup.mentor.controllers;

import com.codeup.mentor.model.Rating;
import com.codeup.mentor.repositories.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/ratings")
public class RatingsController {

    @Autowired
    RatingRepository ratingRepository;

//    @GetMapping("/{recipient_user_id}")
//    public Rating getRating(@PathVariable long recipient_user_id){
//        int avgRating = 0;
//        List<Rating> ratingList = ratingRepository.findAll();
//        for(Rating rating : ratingList){
//            avgRating += rating.getRating();
//        }
//        avgRating = avgRating / ratingList.size();
//        Rating rating = new Rating();
//        rating.setRating(avgRating);
//        return rating;
//    }

    @PostMapping
    public Rating postRating(@RequestBody Rating rating){
        return ratingRepository.save(rating);
    }

}
