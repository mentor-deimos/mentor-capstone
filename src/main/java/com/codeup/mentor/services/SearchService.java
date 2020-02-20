package com.codeup.mentor.services;

import com.codeup.mentor.model.User;
import com.codeup.mentor.repositories.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchService {

    @Autowired
    RatingService ratingService;

    public String searchForUsers(String myInput, boolean isIs_mentor){


        return "is a user";
    }

}
