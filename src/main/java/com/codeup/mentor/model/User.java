package com.codeup.mentor.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private long id;

    @Column(nullable = false)
    private String first_name;

    @Column(nullable = false)
    private String last_name;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    @JsonIgnore
    private String password;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, length = 500)
    private String biography;

    @Column(nullable = false)
    private boolean is_mentor;

    @Column(nullable = false)
    private String location;

    @Column
    private String filestack_picture_url;


//    below > join table user >> interest

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "user_interest",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "interest_id")}
    )
    @JsonManagedReference
    private List<Interest> interestList;

    //    below > user >> ratings
    @OneToMany(mappedBy = "giver_info")
    @JsonBackReference
        private Collection<Rating> given_rating;


    @OneToMany(mappedBy = "receiver_info")
    @JsonBackReference


    private Collection<Rating> received_rating;

    //    below > user >> posts
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    @JsonBackReference

    private List<Post> posts;

    //    below > user OWNER contact list > list of contacts
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "owner_user")
    @JsonBackReference

    private Collection<Contact> contactListOwner;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "added_user_id")
    @JsonBackReference

    private Collection<Contact> contactListEntity;

//   below > user to messages relationship mapped out

    @OneToMany(mappedBy="sender_info")
    @JsonBackReference

    private Collection<Message> senders;

    @OneToMany(mappedBy="receiver_info")
    @JsonBackReference

    private Collection<Message> receivers;

    private int rating;

    public User(String first_name, String last_name, String filestack_picture_url, int rating) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.filestack_picture_url = filestack_picture_url;
        this.rating = rating;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;

    }

    public User(){

    }

    public User(long id, String first_name, String last_name, String username, String email, String biography, boolean is_mentor, String filestack_picture_url, String password, String location) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.biography = biography;
        this.is_mentor = is_mentor;
        this.location = location;
        this.filestack_picture_url = filestack_picture_url;
    }

    public User(String first_name, String last_name, String username, String email, String biography, boolean is_mentor, String filestack_picture_url, String password, String location) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.biography = biography;
        this.is_mentor = is_mentor;
        this.location = location;
        this.filestack_picture_url = filestack_picture_url;

    }



    public User(User copy) {
        id = copy.id;
        first_name = copy.first_name;
        last_name = copy.last_name;
        username = copy.username;
        email = copy.email;
        biography = copy.biography;
        is_mentor = copy.is_mentor;
        password = copy.password;
        filestack_picture_url = copy.filestack_picture_url;
        location = copy.location;
    }

    /* comment test */
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBiography() {
        return biography;
    }

    public void setBiography(String biography) {
        this.biography = biography;
    }

    public boolean isIs_mentor() {
        return is_mentor;
    }

    public void setIs_mentor(boolean is_mentor) {
        this.is_mentor = is_mentor;
    }

    public String getFilestack_picture_url() {
        return filestack_picture_url;
    }

    public List<Interest> getInterestList() {
        return interestList;
    }


    public void setInterestList(List<Interest> interestList) {
        this.interestList = interestList;

    }

    public void setFilestack_picture_url(String filestack_picture_url) {
        this.filestack_picture_url = filestack_picture_url;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Collection<Contact> getContactListOwner() {
        return contactListOwner;
    }

    public void setContactListOwner(Collection<Contact> contactListOwner) {
        this.contactListOwner = contactListOwner;
    }

    public Collection<Contact> getContactListEntity() {
        return contactListEntity;
    }

    public void setContactListEntity(Collection<Contact> contactListEntity) {
        this.contactListEntity = contactListEntity;
    }

    public Collection<Message> getSenders() {
        return senders;
    }

    public void setSenders(Collection<Message> senders) {
        this.senders = senders;
    }

    public Collection<Message> getReceivers() {
        return receivers;
    }

    public void setReceivers(Collection<Message> receivers) {
        this.receivers = receivers;
    }
}
