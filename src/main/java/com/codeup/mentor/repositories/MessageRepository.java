package com.codeup.mentor.repositories;

import com.codeup.mentor.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MessageRepository extends JpaRepository <Message, Long> {
    @Query(value = "SELECT * FROM  mentor_db.messages WHERE receiver_id = ?1",  nativeQuery = true)
    List<Message> findAllByReceiver_info(long id);


    @Query(value = "SELECT * FROM  mentor_db.messages WHERE sender_id = ?1",  nativeQuery = true)
    List<Message> findAllBySender_info(long id);

}
