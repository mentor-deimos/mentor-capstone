package com.codeup.mentor.controllers;

import com.codeup.mentor.model.Post;
import com.codeup.mentor.model.User;
import com.codeup.mentor.repositories.PostRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class PostController {
    private PostRepository postDao;

    public PostController(PostRepository postDao) {
        this.postDao = postDao;

    }

    @GetMapping("/home")
    public String postsIndex(Model model) {


        User principal = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        model.addAttribute("principal", principal);
        model.addAttribute("post", new Post());
        model.addAttribute("posts", postDao.findAll());
        return "home";
    }

    @GetMapping("/posts/{id}/edit")
    public String viewEditPostForm(@PathVariable long id, Model model) {
        model.addAttribute("post", postDao.getOne(id));
        return "posts/edit";
    }

    @PostMapping("/posts/{id}/edit")
    public String updatePost(@PathVariable long id, @RequestParam String title, @RequestParam String body) {
        Post post = postDao.getOne(id);
        post.setTitle(title);
        post.setBody(body);

        postDao.save(post);
        return "redirect:/home";
    }

    @PostMapping("/posts/{id}/delete")
    public String deletePost(@PathVariable long id) {
        System.out.println("Does this run?");
        postDao.deleteById(id);
        return "redirect:/home";
    }

    @GetMapping("/posts/{id}")
    public String viewPost(@PathVariable long id, Model model) {
        model.addAttribute("title", postDao.getOne(id));
        return "posts/show";
    }


    @PostMapping("/home")
    public String createPost(@ModelAttribute Post post) {
        User u = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        post.setUser(u);
        postDao.save(post);
        return "redirect:/home";
    }

}
