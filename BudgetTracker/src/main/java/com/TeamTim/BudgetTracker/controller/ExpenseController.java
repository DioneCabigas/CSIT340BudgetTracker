package com.TeamTim.BudgetTracker.controller;

import com.TeamTim.BudgetTracker.entity.ExpenseEntity;
import com.TeamTim.BudgetTracker.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    // Create a new expense
    @PostMapping
    public ResponseEntity<ExpenseEntity> createExpense(@RequestBody ExpenseEntity expense) {
        ExpenseEntity createdExpense = expenseService.createExpense(expense);
        return ResponseEntity.ok(createdExpense);
    }

    // Get all expenses for a budget
    @GetMapping("/budget/{budgetName}")
    public ResponseEntity<List<ExpenseEntity>> getExpensesByBudget(@PathVariable String budgetName) {
        List<ExpenseEntity> expenses = expenseService.getExpensesByBudget(budgetName);
        return ResponseEntity.ok(expenses);
    }

    // Delete expense by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExpense(@PathVariable Long id) {
        expenseService.deleteExpense(id);
        return ResponseEntity.noContent().build();
    }
}
