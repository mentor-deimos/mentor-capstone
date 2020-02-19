package com.codeup.mentor.repositories;

import com.codeup.mentor.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

//    User getOne(long id);

List<User> findByIdEquals(long id);

User findByUsername(String username);

User findTopByOrderByIdDesc();



}
