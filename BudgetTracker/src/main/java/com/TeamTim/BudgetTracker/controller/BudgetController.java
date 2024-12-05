package com.TeamTim.BudgetTracker.controller;

import com.TeamTim.BudgetTracker.entity.BudgetEntity;
import com.TeamTim.BudgetTracker.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/budgets")
public class BudgetController {

    @Autowired
    private BudgetService budgetService;

    // Create a new budget
    @PostMapping
    public ResponseEntity<BudgetEntity> createBudget(@RequestBody BudgetEntity budget) {
        BudgetEntity createdBudget = budgetService.createBudget(budget);
        return ResponseEntity.ok(createdBudget);
    }

    // Get all budgets for a user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<BudgetEntity>> getBudgetsByUser(@PathVariable Long userId) {
        List<BudgetEntity> budgets = budgetService.getBudgetsByUser(userId);
        return ResponseEntity.ok(budgets);
    }

    // Get budget by name
    @GetMapping("/{budgetName}")
    public ResponseEntity<BudgetEntity> getBudgetByName(@PathVariable String budgetName) {
        BudgetEntity budget = budgetService.getBudgetByName(budgetName);
        return ResponseEntity.ok(budget);
    }

    // Delete budget by name
    @DeleteMapping("/{budgetName}")
    public ResponseEntity<Void> deleteBudget(@PathVariable String budgetName) {
        budgetService.deleteBudget(budgetName);
        return ResponseEntity.noContent().build();
    }
}
