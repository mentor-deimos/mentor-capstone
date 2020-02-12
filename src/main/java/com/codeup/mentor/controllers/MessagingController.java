package com.codeup.mentor.controllers;


import com.codeup.mentor.model.Message;
import com.codeup.mentor.model.User;
import com.codeup.mentor.repositories.MessageRepository;
import com.codeup.mentor.repositories.UserRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MessagingController {
    private MessageRepository messageDao;
    private UserRepository userDao;


    public MessagingController(MessageRepository messageDao){
        this.messageDao = messageDao;
        this.userDao = userDao;

    }

    @GetMapping("/messages")
    public String showMessages(Model model){
       Message currentmsg = messageDao.getOne((long) 1);
       model.addAttribute("message", currentmsg);

        return "messages";
    }

}
