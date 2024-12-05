package com.TeamTim.BudgetTracker.service;

import com.TeamTim.BudgetTracker.entity.BudgetEntity;
import com.TeamTim.BudgetTracker.entity.UserEntity;
import com.TeamTim.BudgetTracker.repository.BudgetRepository;
import com.TeamTim.BudgetTracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BudgetService {

    @Autowired
    private BudgetRepository budgetRepository;

    @Autowired
    private UserRepository userRepository;

    // Create a new budget
    public BudgetEntity createBudget(BudgetEntity budget) {
        return budgetRepository.save(budget);
    }

    // Get all budgets for a specific user
    public List<BudgetEntity> getBudgetsByUser(Long userId) {
        UserEntity user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
        return budgetRepository.findByUser(user);
    }

    // Get a budget by name
    public BudgetEntity getBudgetByName(String budgetName) {
        return budgetRepository.findById(budgetName)
                .orElseThrow(() -> new RuntimeException("Budget not found with name: " + budgetName));
    }

    // Delete a budget by name
    public void deleteBudget(String budgetName) {
        if (!budgetRepository.existsById(budgetName)) {
            throw new RuntimeException("Budget not found with name: " + budgetName);
        }
        budgetRepository.deleteById(budgetName);
    }
}
