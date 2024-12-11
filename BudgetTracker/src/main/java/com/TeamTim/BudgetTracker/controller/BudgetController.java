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

    // Create or update a budget record
    @PostMapping("/postbudgetrecord")
    public BudgetEntity postBudgetRecord(@RequestBody BudgetEntity budget) {
        return budgetService.postBudgetRecord(budget);
    }

    // Read all budgets
    @GetMapping("/getAllBudgets")
    public List<BudgetEntity> getAllBudgets() {
        return budgetService.getAllBudgets();
    }

    // Read budget by budget name
    @GetMapping("/getBudgetByName")
    public BudgetEntity getBudgetByName(@RequestParam String budgetName) {
        return budgetService.getBudgetByName(budgetName);
    }

    // Read budgets by user ID
    @GetMapping("/getBudgetsByUserId")
    public List<BudgetEntity> getBudgetsByUserId(@RequestParam int userId) {
        return budgetService.getBudgetsByUserId(userId);
    }
}
