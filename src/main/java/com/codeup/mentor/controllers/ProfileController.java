package com.codeup.mentor.controllers;


import com.codeup.mentor.model.User;
import com.codeup.mentor.repositories.InterestRepository;
import com.codeup.mentor.repositories.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


import java.security.Principal;

@Controller
public class ProfileController {
    private UserRepository userDao;
    private InterestRepository interestDao;

    public ProfileController (UserRepository userDao, InterestRepository interestDao){
        this.userDao = userDao;
        this.interestDao = interestDao;
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


            model.addAttribute("interestList", user.getInterestList());
            model.addAttribute("mentorMessage", mentorMessage);
            model.addAttribute("user", user);
            return "profile";
        }
        return "/splash";


    }

    @GetMapping("/profile/{id}")
    public String goToSearchedProfile(@PathVariable long id, Model model){
//            User user = userDao.getOne(id);
            model.addAttribute("user", userDao.getOne(id));
            return "profile";

    }

}
