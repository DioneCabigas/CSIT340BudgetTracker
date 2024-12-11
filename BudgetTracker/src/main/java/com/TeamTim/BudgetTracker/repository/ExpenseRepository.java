package com.TeamTim.BudgetTracker.repository;

import com.TeamTim.BudgetTracker.entity.ExpenseEntity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseRepository extends JpaRepository<ExpenseEntity, Integer> {

    // This is a user-defined method to search an expense record by expense name
    public List<ExpenseEntity> findByExpenseName(String expenseName);

    // You may define more methods for searching, for instance:
    public List<ExpenseEntity> findByBudget_BudgetName(String budgetName);
}
