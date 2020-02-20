package com.codeup.mentor.repositories;

import com.codeup.mentor.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.awt.print.Book;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {


//    Query sqlQuery = entityManager.createNativeQuery("Select * from Books where author = ?", Book.class);
//    List results = sqlQuery.setParameter(1, "Charles Dickens").getResultList();





//    User getOne(long id);
@Query(value ="SELECT * FROM users join ratings on users.id = ratings.recipient_user_id join user_interest u on users.id = u.user_id join interests on u.interest_id = interests.id where users.first_name LIKE %:myInput% or users.last_name LIKE %:myInput% or users.location LIKE %:myInput% or interests.name like %:myInput%", nativeQuery = true)
List<User> findUsersByFirst_nameOrLast_nameOrLocation(@Param("myInput") String myInput);

    @Query(value ="SELECT * FROM users where users.first_name LIKE %:myInput% or users.last_name LIKE %:myInput% or users.location LIKE %:myInput%", nativeQuery = true)
    List<User> findUsersBysearch(@Param("myInput") String myInput);

    @Query(value ="SELECT name FROM interests where LOWER(name) like %:myInput%", nativeQuery = true)
    List<User> findAllByInterestListContains(String first_name);

List<User> findByIdEquals(long id);

User findByUsername(String username);




}
