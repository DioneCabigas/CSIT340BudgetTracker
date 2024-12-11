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
    private UserRepository userRepository;  // Inject UserRepository

    // Fetch all budgets
    public List<BudgetEntity> getAllBudgets() {
        return budgetRepository.findAll();  // This will fetch all budgets from the DB
    }

    public BudgetEntity createBudget(BudgetEntity budget) {
        // Fetch user by userId 1
        UserEntity user = userRepository.findById(1).orElse(null); // user_id 1
        if (user != null) {
            budget.setUser(user);  // Set the user for the budget
        } else {
            throw new RuntimeException("User not found");
        }

        return budgetRepository.save(budget);  // Save the budget with the user associated
    }

    public void deleteBudget(String budgetName) {
        BudgetEntity budget = budgetRepository.findByBudgetName(budgetName);
        if (budget != null) {
            budgetRepository.delete(budget);
        }
    }
}
