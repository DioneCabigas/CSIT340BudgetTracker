package com.TeamTim.BudgetTracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.TeamTim.BudgetTracker.entity.ExpensesEntity;
import com.TeamTim.BudgetTracker.service.ExpensesService;

import java.util.List;

@RestController
@RequestMapping(method = RequestMethod.GET, path = "/api/expenses")
public class ExpensesController {

    @Autowired
    ExpensesService expensesService;

    @PostMapping("/postExpenseRecord")
    public ExpensesEntity postExpenseRecord(@RequestBody ExpensesEntity expense) {
        return expensesService.postExpenseRecord(expense);
    }

    @GetMapping("/getAllExpenses")
    public List<ExpensesEntity> getAllExpenses() {
        return expensesService.getAllExpenses();
    }

    @GetMapping("/getExpensesByBudgetId/{budgetId}")
    public List<ExpensesEntity> getExpensesByBudgetId(@PathVariable int budgetId) {
        return expensesService.getExpensesByBudgetId(budgetId);
    }
}

