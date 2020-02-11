package com.codeup.mentor.repositories;

import com.codeup.mentor.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {

}
