package com.TeamTim.BudgetTracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.TeamTim.BudgetTracker.entity.BudgetEntity;
import com.TeamTim.BudgetTracker.service.BudgetService;

import java.util.List;

@RestController
@RequestMapping(method = RequestMethod.GET, path = "/api/budget")
public class BudgetController {

    @Autowired
    BudgetService budgetService;

    @PostMapping("/postBudgetRecord")
    public BudgetEntity postBudgetRecord(@RequestBody BudgetEntity budget) {
        return budgetService.postBudgetRecord(budget);
    }

    @GetMapping("/getAllBudgets")
    public List<BudgetEntity> getAllBudgets() {
        return budgetService.getAllBudgets();
    }

    @GetMapping("/getBudgetsByUserId/{userId}")
    public List<BudgetEntity> getBudgetsByUserId(@PathVariable int userId) {
        return budgetService.getBudgetsByUserId(userId);
    }
}

