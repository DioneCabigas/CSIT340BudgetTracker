package com.TeamTim.BudgetTracker.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class ExpensesEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int expensesId;

    private String expenseName;
    private double expenseAmount;
    private LocalDate dateExpenseCreated;

    @ManyToOne
    @JoinColumn(name = "budget_id", nullable = false)
    private BudgetEntity budget;

    public ExpensesEntity() {
        super();
    }

    public ExpensesEntity(int expensesId, String expenseName, double expenseAmount, LocalDate dateExpenseCreated, BudgetEntity budget) {
        super();
        this.expensesId = expensesId;
        this.expenseName = expenseName;
        this.expenseAmount = expenseAmount;
        this.dateExpenseCreated = dateExpenseCreated;
        this.budget = budget;
    }

    public int getExpensesId() {
        return expensesId;
    }

    public void setExpensesId(int expensesId) {
        this.expensesId = expensesId;
    }

    public String getExpenseName() {
        return expenseName;
    }

    public void setExpenseName(String expenseName) {
        this.expenseName = expenseName;
    }

    public double getExpenseAmount() {
        return expenseAmount;
    }

    public void setExpenseAmount(double expenseAmount) {
        this.expenseAmount = expenseAmount;
    }

    public LocalDate getDateExpenseCreated() {
        return dateExpenseCreated;
    }

    public void setDateExpenseCreated(LocalDate dateExpenseCreated) {
        this.dateExpenseCreated = dateExpenseCreated;
    }

    public BudgetEntity getBudget() {
        return budget;
    }

    public void setBudget(BudgetEntity budget) {
        this.budget = budget;
    }
}
