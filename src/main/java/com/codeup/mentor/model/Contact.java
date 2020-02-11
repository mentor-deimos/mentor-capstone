package com.codeup.mentor.model;

import javax.persistence.*;

@Entity
@Table(name="contacts")
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private long id;

    @Column(nullable = false)
    private String added_user_id;

    @ManyToOne
    private User user;


}
