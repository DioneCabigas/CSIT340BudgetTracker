package com.TeamTim.BudgetTracker.repository;

import com.TeamTim.BudgetTracker.entity.ExpenseEntity;
import com.TeamTim.BudgetTracker.entity.BudgetEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository<ExpenseEntity, Long> {
    // Find all expenses for a specific budget
    List<ExpenseEntity> findByBudget(BudgetEntity budget);
}
