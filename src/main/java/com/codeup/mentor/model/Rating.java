package com.codeup.mentor.model;

import javax.persistence.*;

@Entity
@Table(name="ratings")
public class Rating {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private long id;

    @Column(nullable = false)
    private byte rating;

    @ManyToOne
    private User user;
}
