package com.TeamTim.BudgetTracker.service;

import com.TeamTim.BudgetTracker.entity.BudgetEntity;
import com.TeamTim.BudgetTracker.repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BudgetService {

    @Autowired
    private BudgetRepository budgetRepository;

    public BudgetService() {
        super();
    }

    // Create or update a budget record
    public BudgetEntity postBudgetRecord(BudgetEntity budget) {
        return budgetRepository.save(budget);
    }

    // Read all budgets
    public List<BudgetEntity> getAllBudgets() {
        return budgetRepository.findAll();
    }

    // Read budget by budget name
    public BudgetEntity getBudgetByName(String budgetName) {
        return budgetRepository.findByBudgetName(budgetName);
    }

    // Read budgets by user ID
    public List<BudgetEntity> getBudgetsByUserId(int userId) {
        return budgetRepository.findByUser_UserId(userId);
    }
}
