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
    @JoinColumn(name="recipient_user_id")
    private User receiver_info;

    @ManyToOne
    @JoinColumn(name="giver_user_id")
    private User giver_info;


}
