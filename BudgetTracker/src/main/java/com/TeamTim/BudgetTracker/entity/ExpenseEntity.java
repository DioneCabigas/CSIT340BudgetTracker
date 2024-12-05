package com.TeamTim.BudgetTracker.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "expense")
public class ExpenseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long expenseId; // Primary Key

    @Column(nullable = false)
    private String expenseName;

    @Column(nullable = false)
    private Double expenseAmountSpent;

    @Column(nullable = false)
    private LocalDate expenseDateCreated;

    // Many Expenses belong to one Budget
    @ManyToOne
    @JoinColumn(name = "budget_name", nullable = false)
    private BudgetEntity budget;

    // Getters and Setters
    public Long getExpenseId() {
        return expenseId;
    }

    public void setExpenseId(Long expenseId) {
        this.expenseId = expenseId;
    }

    public String getExpenseName() {
        return expenseName;
    }

    public void setExpenseName(String expenseName) {
        this.expenseName = expenseName;
    }

    public Double getExpenseAmountSpent() {
        return expenseAmountSpent;
    }

    public void setExpenseAmountSpent(Double expenseAmountSpent) {
        this.expenseAmountSpent = expenseAmountSpent;
    }

    public LocalDate getExpenseDateCreated() {
        return expenseDateCreated;
    }

    public void setExpenseDateCreated(LocalDate expenseDateCreated) {
        this.expenseDateCreated = expenseDateCreated;
    }

    public BudgetEntity getBudget() {
        return budget;
    }

    public void setBudget(BudgetEntity budget) {
        this.budget = budget;
    }
}
