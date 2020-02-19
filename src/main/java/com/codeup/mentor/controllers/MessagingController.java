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

//        model.addAttribute("message", new Message());
        return "draftmessage";
    }

    @PostMapping("/messages/send")
    public String sendMessage(@ModelAttribute Message message){
        message.setDatetime(ZonedDateTime.now());
        message.setReceiver_info(userDao.getOne(2L));
        message.setSender_info(userDao.getOne(1L));
        messageDao.save(message);
        return "redirect:/messages";
    }

    @GetMapping("/messages")
    public String showMessages(Model model){

        List<Contact> contactList  = contactDao.findAll();

//       Message currentmsg = messageDao.getOne((long) 1);
       Message currentmsg = new Message("Hey, interested in learning how to change the oil on my Jeep Wrangler - thanks for any time you might have :)");
//       User receivedUser = currentmsg.getReceiver_info();
//       User sentUser = currentmsg.getSender_info();

       model.addAttribute("message", currentmsg);
//       model.addAttribute("receivedUser", receivedUser);
//       model.addAttribute("sentUser", sentUser);
       model.addAttribute("contactList", contactList);

        return "messages";
    }

}
