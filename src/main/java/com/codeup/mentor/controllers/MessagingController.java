package com.codeup.mentor.controllers;


import com.codeup.mentor.model.Contact;
import com.codeup.mentor.model.Message;
import com.codeup.mentor.model.User;
import com.codeup.mentor.repositories.ContactRepository;
import com.codeup.mentor.repositories.MessageRepository;
import com.codeup.mentor.repositories.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;

@Controller
public class MessagingController {
    private MessageRepository messageDao;
    private UserRepository userDao;
    private ContactRepository contactDao;


    public MessagingController(MessageRepository messageDao, UserRepository userDao, ContactRepository contactDao){
        this.messageDao = messageDao;
        this.userDao = userDao;
        this.contactDao = contactDao;

    }

    @GetMapping("/messages/send")
    public String sendMessage(Model model){

        model.addAttribute("message", new Message());
        return "draftmessage";
    }

    @PostMapping("/messages/send")
    public String sendMessage(@ModelAttribute Message message){
        message.setDatetime(ZonedDateTime.now());
        message.setReceiver_info(userDao.getOne(2L));
        message.setSender_info(userDao.getOne(1L));
        messageDao.save(message);
        return "redirect:/home";
    }

    @GetMapping("/messages")
    public String showMessages(Model model){
        User u = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<Contact> contactList  = contactDao.findAll();


        if (u.getReceivers() == null){
            model.addAttribute("messagingDisplay", false);
        } else {
            model.addAttribute("messagingDisplay", true);

        }


       model.addAttribute("messagelist", u.getReceivers());
       model.addAttribute("contactList", contactList);

        return "messages";
    }

}
