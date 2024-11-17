package com.TeamTim.BudgetTracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.TeamTim.BudgetTracker.entity.ExpensesEntity;

import java.util.List;

@Repository
public interface ExpensesRepository extends JpaRepository<ExpensesEntity, Integer> {
    List<ExpensesEntity> findByBudgetBudgetId(int budgetId);
}

