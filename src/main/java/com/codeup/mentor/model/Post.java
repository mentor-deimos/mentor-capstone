package com.codeup.mentor.model;

import javax.persistence.*;

@Entity
@Table(name="posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length=750)
    private String body;

    @ManyToOne
    private User user;


}
