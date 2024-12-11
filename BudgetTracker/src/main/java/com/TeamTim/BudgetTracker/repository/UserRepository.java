package com.TeamTim.BudgetTracker.repository;

import com.TeamTim.BudgetTracker.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

    // This is a user-defined method to search a user record by username
    public UserEntity findByUsername(String username);

    // You may define more methods for searching, for instance:
    public UserEntity findByEmail(String email);
}
