package com.TeamTim.BudgetTracker.repository;

import com.TeamTim.BudgetTracker.entity.BudgetEntity;
import com.TeamTim.BudgetTracker.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BudgetRepository extends JpaRepository<BudgetEntity, String> {
    // Find all budgets for a specific user
    List<BudgetEntity> findByUser(UserEntity user);
}
