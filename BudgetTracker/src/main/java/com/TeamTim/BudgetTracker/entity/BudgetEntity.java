package com.TeamTim.BudgetTracker.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "budget")
public class BudgetEntity {

    @Id
    @Column(nullable = false, unique = true)
    private String budgetName; // Primary Key

    @Column(nullable = false)
    private Double budgetAmountAllocated;

    // Many Budgets belong to one User
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    // One Budget can have multiple Expenses
    @OneToMany(mappedBy = "budget", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ExpenseEntity> expenses;

    // Getters and Setters
    public String getBudgetName() {
        return budgetName;
    }

    public void setBudgetName(String budgetName) {
        this.budgetName = budgetName;
    }

    public Double getBudgetAmountAllocated() {
        return budgetAmountAllocated;
    }

    public void setBudgetAmountAllocated(Double budgetAmountAllocated) {
        this.budgetAmountAllocated = budgetAmountAllocated;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public List<ExpenseEntity> getExpenses() {
        return expenses;
    }

    public void setExpenses(List<ExpenseEntity> expenses) {
        this.expenses = expenses;
    }
}
