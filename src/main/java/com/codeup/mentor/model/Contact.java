package com.codeup.mentor.model;

import javax.persistence.*;

@Entity
@Table(name="contacts")
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private long id;

    @ManyToOne
    @JoinColumn(name="added_user_id")
    private User added_user_id;

    @ManyToOne
    @JoinColumn(name="list_owner_id")
    private User owner_user;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getAdded_user_id() {
        return added_user_id;
    }

    public void setAdded_user_id(User added_user_id) {
        this.added_user_id = added_user_id;
    }

    public User getOwner_user() {
        return owner_user;
    }

    public void setOwner_user(User owner_user) {
        this.owner_user = owner_user;
    }
}
