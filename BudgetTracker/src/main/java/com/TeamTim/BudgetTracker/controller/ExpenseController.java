package com.TeamTim.BudgetTracker.controller;

import com.TeamTim.BudgetTracker.entity.ExpenseEntity;
import com.TeamTim.BudgetTracker.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expense")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    // Create or update an expense record
    @PostMapping("/postexpenserecord")
    public ExpenseEntity postExpenseRecord(@RequestBody ExpenseEntity expense) {
        return expenseService.postExpenseRecord(expense);
    }

    // Read all expenses
    @GetMapping("/getAllExpenses")
    public List<ExpenseEntity> getAllExpenses() {
        return expenseService.getAllExpenses();
    }

    // Read expenses by expense name
    @GetMapping("/getExpensesByName")
    public List<ExpenseEntity> getExpensesByName(@RequestParam String expenseName) {
        return expenseService.getExpensesByName(expenseName);
    }

    // Read expenses by budget name
    @GetMapping("/getExpensesByBudgetName")
    public List<ExpenseEntity> getExpensesByBudgetName(@RequestParam String budgetName) {
        return expenseService.getExpensesByBudgetName(budgetName);
    }
}
