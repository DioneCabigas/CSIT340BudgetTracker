package com.TeamTim.BudgetTracker.repository;

import com.TeamTim.BudgetTracker.entity.BudgetEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BudgetRepository extends JpaRepository<BudgetEntity, String> {

    // This is a user-defined method to search a budget record by budget name
    public BudgetEntity findByBudgetName(String budgetName);

    // Fetch budgets by user id (e.g., user_id = 1)
    public List<BudgetEntity> findByUser_UserId(int userId);
}
