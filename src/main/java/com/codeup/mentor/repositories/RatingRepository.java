package com.codeup.mentor.repositories;

import com.codeup.mentor.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.lang.ref.Reference;
import java.util.List;

public interface RatingRepository extends JpaRepository<Rating, Long> {
    @Query(value ="SELECT * FROM ratings WHERE recipient_user_id = ?1", nativeQuery = true)
    List<Rating> findAllByRecipientId(long id);

    @Query(value="SELECT * FROM ratings WHERE recipient_user_id = ?1 AND giver_user_id = ?2", nativeQuery = true)
    List<Rating> findByGiver_infoExists(long recipient_id, long giver_id);

}
