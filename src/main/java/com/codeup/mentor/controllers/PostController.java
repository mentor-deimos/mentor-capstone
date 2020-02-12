package com.codeup.mentor.controllers;

import com.codeup.mentor.model.Post;
import com.codeup.mentor.model.User;
import com.codeup.mentor.repositories.PostRepository;
import com.codeup.mentor.repositories.UserRepository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

public class PostController {
    private PostRepository postDao;
    private UserRepository userDao;

    public PostController(PostRepository postDao,
                          UserRepository userDao) {
        this.postDao = postDao;
        this.userDao = userDao;

    }

    @GetMapping("/posts")
    public String postsIndex(Model model) {
        model.addAttribute("posts", postDao.findAll());
        return "posts/index";
    }

    @GetMapping("/posts/{id}/edit")
    public String viewEditPostForm(@PathVariable long id, Model model) {
        model.addAttribute("post", postDao.getOne(id));
        return "posts/edit";
    }

    @PostMapping("/posts/{id}/edit")
    public String updatePost(@PathVariable long id, @RequestParam String title, @RequestParam String body) {
        Post p = new Post(
                id,
                title,
                body
        );
        postDao.save(p);
        return "redirect:/posts";
    }

    @PostMapping("/posts/{id}/delete")
    public String deletePost(@PathVariable long id) {
        System.out.println("Does this run?");
        postDao.deleteById(id);
        return "redirect:/posts";
    }

    @GetMapping("/posts/{id}")
    public String viewPost(@PathVariable long id, Model model) {
        model.addAttribute("title", postDao.getOne(id));
        return "posts/show";
    }


    @GetMapping("/posts/create")
    public String createPostForm(Model model) {
        model.addAttribute("post", new Post());
        return "posts/create";
    }
    @PostMapping("/posts/create")
    public String createPost(@ModelAttribute Post post) {
        User u = userDao.getOne(1L);
        post.setUser(u);
        postDao.save(post);
        return "redirect:/posts";
    }

//    @GetMapping("one/test")
//    public String returnOneToViewOne(Model model) {
//        model.addAttribute("posts", postDao.findAll());
//        return "one-to-one-test";
//    }
}
