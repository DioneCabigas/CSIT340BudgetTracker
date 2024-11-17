package com.TeamTim.BudgetTracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TeamTim.BudgetTracker.entity.BudgetEntity;
import com.TeamTim.BudgetTracker.repository.BudgetRepository;

import java.util.List;

@Service
public class BudgetService {

    @Autowired
    BudgetRepository budgetRepository;

    public BudgetService() {
        super();
    }

    public BudgetEntity postBudgetRecord(BudgetEntity budget) {
        return budgetRepository.save(budget);
    }

    public List<BudgetEntity> getAllBudgets() {
        return budgetRepository.findAll();
    }

    public List<BudgetEntity> getBudgetsByUserId(int userId) {
        return budgetRepository.findByUserUserId(userId);
    }
}
