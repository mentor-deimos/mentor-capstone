package com.codeup.mentor.repositories;

import com.codeup.mentor.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository <Message, Long> {

}
