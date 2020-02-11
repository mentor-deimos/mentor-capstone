package com.codeup.mentor.repositories;

import com.codeup.mentor.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

//    User getOne(long id);
}
