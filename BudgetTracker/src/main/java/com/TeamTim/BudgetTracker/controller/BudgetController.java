package com.TeamTim.BudgetTracker.controller;

import com.TeamTim.BudgetTracker.entity.BudgetEntity;
import com.TeamTim.BudgetTracker.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/budget")
public class BudgetController {

    @Autowired
    private BudgetService budgetService;

    // GET all budgets
    @GetMapping
    public List<BudgetEntity> getAllBudgets() {
        List<BudgetEntity> budgets = budgetService.getAllBudgets();
        if (budgets.isEmpty()) {
            throw new RuntimeException("No budgets found");
        }
        return budgets;
    }

    // POST create new budget
    @PostMapping
    public BudgetEntity createBudget(@RequestBody BudgetEntity budget) {
        return budgetService.createBudget(budget);
    }

    // DELETE budget by budgetName
    @DeleteMapping("/{budgetName}")
    public void deleteBudget(@PathVariable String budgetName) {
        budgetService.deleteBudget(budgetName);
    }
}
