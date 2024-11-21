package com.TeamTim.BudgetTracker.repository;

import com.TeamTim.BudgetTracker.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    // You can define custom queries here if needed, e.g., find by email or username
    UserEntity findByEmail(String email);
    UserEntity findByUsername(String username);
}
