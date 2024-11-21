package com.TeamTim.BudgetTracker.service;

import com.TeamTim.BudgetTracker.entity.ExpenseEntity;
import com.TeamTim.BudgetTracker.entity.BudgetEntity;
import com.TeamTim.BudgetTracker.repository.ExpenseRepository;
import com.TeamTim.BudgetTracker.repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Autowired
    private BudgetRepository budgetRepository;

    // Create a new expense
    public ExpenseEntity createExpense(ExpenseEntity expense) {
        BudgetEntity budget = budgetRepository.findById(expense.getBudget().getBudgetName())
                .orElseThrow(() -> new RuntimeException("Budget not found with name: " + expense.getBudget().getBudgetName()));
        expense.setBudget(budget);
        return expenseRepository.save(expense);
    }

    // Get all expenses for a specific budget
    public List<ExpenseEntity> getExpensesByBudget(String budgetName) {
        BudgetEntity budget = budgetRepository.findById(budgetName)
                .orElseThrow(() -> new RuntimeException("Budget not found with name: " + budgetName));
        return expenseRepository.findByBudget(budget);
    }

    // Delete an expense by ID
    public void deleteExpense(Long expenseId) {
        if (!expenseRepository.existsById(expenseId)) {
            throw new RuntimeException("Expense not found with ID: " + expenseId);
        }
        expenseRepository.deleteById(expenseId);
    }
}
