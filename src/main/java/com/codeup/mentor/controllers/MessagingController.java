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
import org.springframework.web.bind.annotation.RequestParam;

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

    @PostMapping("/messages/addcontact")
    public String addContact (@RequestParam(name="contactHidden") long addID){
        Contact addedContact = new Contact();
        User addthisUserID = userDao.getOne(addID);
        User contactlistOwner = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        addedContact.setOwner_user(contactlistOwner);
        addedContact.setAdded_user_id(addthisUserID);
        contactDao.save(addedContact);

        return "redirect:/messages";




    }

    @PostMapping("/messages/send")
    public String sendMessage(@ModelAttribute Message message, @RequestParam(name="sendmessagetoID") long senttoID){
        User sentfromU = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User senttoU = userDao.getOne(senttoID);

        message.setDatetime(ZonedDateTime.now());
        message.setReceiver_info(senttoU);
        message.setSender_info(sentfromU);
        messageDao.save(message);
        return "redirect:/messages";
    }

    @GetMapping("/messages")
    public String showMessages(Model model){
        User u = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<Message> receivedMessages = messageDao.findAllByReceiver_info(u.getId());
        List<Message> sentMessages = messageDao.findAllBySender_info(u.getId());

            List<Contact> contactList = contactDao.findContactsByOwner_userIs(u.getId());



        if (contactList.size() == 0){
            model.addAttribute("hasContacts", false);
        } else {
            model.addAttribute("hasContacts", true);

        }

        if (receivedMessages.size() == 0 && sentMessages.size() == 0){
            model.addAttribute("messagingDisplay", false);
        } else {
            model.addAttribute("messagingDisplay", true);

        }

        if (receivedMessages.size() == 0){
            model.addAttribute("inboxDisplay", false);
        } else {
            model.addAttribute("inboxDisplay", true);
        }


        if (sentMessages.size() == 0){
            model.addAttribute("outboxDisplay", false);
        } else {
            model.addAttribute("outboxDisplay", true);
        }



        model.addAttribute("user", u);
        model.addAttribute("sentMessages", sentMessages);
       model.addAttribute("receivedMessages", receivedMessages);
       model.addAttribute("contactList", contactList);

        return "messages";
    }


}


