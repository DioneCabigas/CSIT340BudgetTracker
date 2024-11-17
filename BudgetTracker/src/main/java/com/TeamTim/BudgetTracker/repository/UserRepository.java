package com.TeamTim.BudgetTracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.TeamTim.BudgetTracker.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

    // User-defined method to search a user record by email
    public UserEntity findByEmail(String email);

    // You may define more methods for searching, for instance, in this interface

}
