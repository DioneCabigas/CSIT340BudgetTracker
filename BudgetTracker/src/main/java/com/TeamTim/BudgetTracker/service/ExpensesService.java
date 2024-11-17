package com.TeamTim.BudgetTracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TeamTim.BudgetTracker.entity.ExpensesEntity;
import com.TeamTim.BudgetTracker.repository.ExpensesRepository;

import java.util.List;

@Service
public class ExpensesService {

    @Autowired
    ExpensesRepository expensesRepository;

    public ExpensesService() {
        super();
    }

    public ExpensesEntity postExpenseRecord(ExpensesEntity expense) {
        return expensesRepository.save(expense);
    }

    public List<ExpensesEntity> getAllExpenses() {
        return expensesRepository.findAll();
    }

    public List<ExpensesEntity> getExpensesByBudgetId(int budgetId) {
        return expensesRepository.findByBudgetBudgetId(budgetId);
    }
}

