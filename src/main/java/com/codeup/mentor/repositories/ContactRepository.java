package com.codeup.mentor.repositories;

import com.codeup.mentor.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ContactRepository extends JpaRepository <Contact, Long> {
    @Query(value = "SELECT * FROM  mentor_db.contacts WHERE list_owner_id = ?1",  nativeQuery = true)
    List<Contact> findContactsByOwner_userIs(long id);

    @Query(value = "SELECT * FROM mentor_db.contacts WHERE added_user_id = ?1 AND list_owner_id = ?2", nativeQuery = true)
    List<Contact> findByOwner_userAndAdded_user_idExists(long added_user_id, long list_owner_id);
}
