package com.codeup.mentor.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;

@Entity
@Table(name="messages")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private long id;

    @Column(nullable = false, length = 750)
    private String body;

    @Column(nullable = false)
    private ZonedDateTime datetime;

    @ManyToOne
    @JoinColumn(name="sender_id")
    private User sender_info;

    @ManyToOne
    @JoinColumn(name="receiver_id")
    private User receiver_info;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public ZonedDateTime getDatetime() {
        return datetime;
    }

    public void setDatetime(ZonedDateTime datetime) {
        this.datetime = datetime;
    }

    public User getSender_info() {
        return sender_info;
    }

    public void setSender_info(User sender_info) {
        this.sender_info = sender_info;
    }

    public User getReceiver_info() {
        return receiver_info;
    }

    public void setReceiver_info(User receiver_info) {
        this.receiver_info = receiver_info;
    }
}
