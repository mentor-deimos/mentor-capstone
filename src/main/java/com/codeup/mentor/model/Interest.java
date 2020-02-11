package com.codeup.mentor.model;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="interests")
public class Interest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private long id;

    @Column(nullable = false)
    private String name;

    private String picture_path;

    @ManyToMany(mappedBy = "interestList")
    List<User> users;

}
