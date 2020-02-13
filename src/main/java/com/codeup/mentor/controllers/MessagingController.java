package com.codeup.mentor.controllers;


import com.codeup.mentor.model.Contact;
import com.codeup.mentor.model.Message;
import com.codeup.mentor.model.User;
import com.codeup.mentor.repositories.ContactRepository;
import com.codeup.mentor.repositories.MessageRepository;
import com.codeup.mentor.repositories.UserRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

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

    @GetMapping("/messages")
    public String showMessages(Model model){

        List<Contact> contactList  = contactDao.findAll();

//       Message currentmsg = messageDao.getOne((long) 1);
//       User receivedUser = currentmsg.getReceiver_info();
//       User sentUser = currentmsg.getSender_info();
//
//       model.addAttribute("message", currentmsg);
//       model.addAttribute("receivedUser", receivedUser);
//       model.addAttribute("sentUser", sentUser);
       model.addAttribute("contactList", contactList);

        return "messages";
    }

}
