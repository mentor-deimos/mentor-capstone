package com.codeup.mentor.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name="ratings")
public class Rating {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private long id;

    @Column(nullable = false)
    private int rating;

    @ManyToOne
    @JoinColumn(name="recipient_user_id")
    @JsonManagedReference


    private User receiver_info;

    @ManyToOne
    @JoinColumn(name="giver_user_id")
    @JsonManagedReference

    private User giver_info;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public User getReceiver_info() {
        return receiver_info;
    }

    public void setReceiver_info(User receiver_info) {
        this.receiver_info = receiver_info;
    }

    public User getGiver_info() {
        return giver_info;
    }

    public void setGiver_info(User giver_info) {
        this.giver_info = giver_info;
    }
}
