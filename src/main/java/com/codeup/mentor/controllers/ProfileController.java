package com.codeup.mentor.controllers;


import com.codeup.mentor.model.Contact;
import com.codeup.mentor.model.Message;
import com.codeup.mentor.model.Rating;
import com.codeup.mentor.model.User;
import com.codeup.mentor.repositories.ContactRepository;
import com.codeup.mentor.repositories.InterestRepository;
import com.codeup.mentor.repositories.RatingRepository;
import com.codeup.mentor.repositories.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;


import java.security.Principal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
public class ProfileController {
    private UserRepository userDao;
    private InterestRepository interestDao;
    private RatingRepository ratingDao;
    private ContactRepository contactDao;



    public ProfileController (UserRepository userDao, InterestRepository interestDao, RatingRepository ratingDao, ContactRepository contactDao){
        this.userDao = userDao;
        this.interestDao = interestDao;
        this.ratingDao = ratingDao;
        this.contactDao = contactDao;
    }



    @GetMapping("/profile")
    public String goToProfile(Model model, Principal principal){
        if (principal != null){
            User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

//            kah :: turn BOOLEAN into STRING FOR PROFILE DISPLAY
            String mentorMessage;
            if (user.isIs_mentor()){
                mentorMessage = "Mentor";
            } else {
                mentorMessage = "Mentee";
            }


            List<Rating> allByRecipientId = ratingDao.findAllByRecipientId(user.getId());
            ArrayList<Integer> allRatingsForRecipientId = new ArrayList<>();

            for (Rating rating : allByRecipientId){
                allRatingsForRecipientId.add(rating.getRating());
            }


            if (allRatingsForRecipientId.size() == 0){
                model.addAttribute("userRating", 0);
            } else {
                model.addAttribute("userRating", allRatingsForRecipientId);

            }

            model.addAttribute("messagingDisplay", false);
            model.addAttribute("ratingDisplay", false);
            model.addAttribute("message", new Message());
//            model.addAttribute("contactOBJ", new Contact());
            model.addAttribute("ratingOBJ", new Rating());
            model.addAttribute("interestList", userDao.getOne(user.getId()).getInterestList());
            model.addAttribute("mentorMessage", mentorMessage);
            model.addAttribute("user", user);
            return "profile";
        }
        return "/splash";


    }

    @GetMapping("/profile/{id}")
    public String goToSearchedProfile(@PathVariable long id, Model model){
        User user = userDao.getOne(id);
        User currentUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();


        String mentorMessage;
        if (user.isIs_mentor()){
            mentorMessage = "Mentor";
        } else {
            mentorMessage = "Mentee";
        }

        List<Rating> allByRecipientId = ratingDao.findAllByRecipientId(user.getId());
        ArrayList<Integer> allRatingsForRecipientId = new ArrayList<>();

        for (Rating rating : allByRecipientId){
            allRatingsForRecipientId.add(rating.getRating());
        }

        System.out.println("allRatingsForRecipientId.size() = " + allRatingsForRecipientId.size());

        if (allRatingsForRecipientId.size() == 0){
            model.addAttribute("userRating", 0);
        } else {
            model.addAttribute("userRating", allRatingsForRecipientId);

        }

        boolean ratedBefore = !ratingDao.findByGiver_infoExists(id, currentUser.getId()).isEmpty();
        boolean contactAlready = !contactDao.findByOwner_userAndAdded_user_idExists(id, currentUser.getId()).isEmpty();

        model.addAttribute("contactAlready", contactAlready);
        model.addAttribute("ratedBefore", ratedBefore);
        model.addAttribute("message", new Message());
        model.addAttribute("profileID", id);
        model.addAttribute("ratingDisplay", true);
        model.addAttribute("messagingDisplay", true);
        model.addAttribute("ratingOBJ", new Rating());
        model.addAttribute("interestList", userDao.getOne(user.getId()).getInterestList());
        model.addAttribute("mentorMessage", mentorMessage);
        model.addAttribute("user", user);


            return "profile";

    }

}

