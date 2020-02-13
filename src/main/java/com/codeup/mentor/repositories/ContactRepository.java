package com.codeup.mentor.repositories;

import com.codeup.mentor.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository <Contact, Long> {


}
