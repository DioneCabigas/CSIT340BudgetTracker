package com.TeamTim.BudgetTracker.repository;

import com.TeamTim.BudgetTracker.entity.BudgetEntity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BudgetRepository extends JpaRepository<BudgetEntity, String> {

    // This is a user-defined method to search a budget record by budget name
    public BudgetEntity findByBudgetName(String budgetName);

    // You may define more methods for searching, for instance:
    public List<BudgetEntity> findByUser_UserId(int userId);
}
