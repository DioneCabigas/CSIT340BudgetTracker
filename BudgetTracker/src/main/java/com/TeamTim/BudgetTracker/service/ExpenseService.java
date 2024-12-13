package com.TeamTim.BudgetTracker.service;

import com.TeamTim.BudgetTracker.entity.ExpenseEntity;
import com.TeamTim.BudgetTracker.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    // Create or update an expense record
    public ExpenseEntity postExpenseRecord(ExpenseEntity expense) {
        return expenseRepository.save(expense);
    }

    // Read all expenses
    public List<ExpenseEntity> getAllExpenses() {
        return expenseRepository.findAll();
    }

    public boolean deleteExpense(int id) {
        if (expenseRepository.existsById(id)) {
            expenseRepository.deleteById(id);
            return true; // Expense deleted successfully
        }
        return false; // Expense not found
    }
    

    // Read expenses by budget name
    public List<ExpenseEntity> getExpensesByBudgetName(String budgetName) {
        return expenseRepository.findByBudget_BudgetName(budgetName);
    }


     // Calculate total spent across all expenses
     public double getTotalSpent() {
        List<ExpenseEntity> expenses = expenseRepository.findAll();
        return expenses.stream()
                .mapToDouble(ExpenseEntity::getExpenseAmountSpent)
                .sum();
    }

    // Calculate total spent for a specific budget
    public double getTotalSpentByBudget(String budgetName) {
        List<ExpenseEntity> expenses = expenseRepository.findByBudget_BudgetName(budgetName);
        return expenses.stream()
                .mapToDouble(ExpenseEntity::getExpenseAmountSpent)
                .sum();
    }
}
