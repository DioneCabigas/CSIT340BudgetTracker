package com.TeamTim.BudgetTracker.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "EXPENSE")
public class ExpenseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "expense_id")
    private int expenseId;

    @Column(name = "expense_name")
    private String expenseName;

    @Column(name = "expense_amount_spent")
    private double expenseAmountSpent;

    @Column(name = "expense_date_created")
    private Date expenseDateCreated;

    @ManyToOne
    @JoinColumn(name = "budget_name", referencedColumnName = "budget_name")
    private BudgetEntity budget;

    public ExpenseEntity() {
        super();
    }

    public ExpenseEntity(int expenseId, String expenseName, double expenseAmountSpent, Date expenseDateCreated, BudgetEntity budget) {
        super();
        this.expenseId = expenseId;
        this.expenseName = expenseName;
        this.expenseAmountSpent = expenseAmountSpent;
        this.expenseDateCreated = expenseDateCreated;
        this.budget = budget;
    }

    public int getExpenseId() {
        return expenseId;
    }

    public void setExpenseId(int expenseId) {
        this.expenseId = expenseId;
    }

    public String getExpenseName() {
        return expenseName;
    }

    public void setExpenseName(String expenseName) {
        this.expenseName = expenseName;
    }

    public double getExpenseAmountSpent() {
        return expenseAmountSpent;
    }

    public void setExpenseAmountSpent(double expenseAmountSpent) {
        this.expenseAmountSpent = expenseAmountSpent;
    }

    public Date getExpenseDateCreated() {
        return expenseDateCreated;
    }

    public void setExpenseDateCreated(Date expenseDateCreated) {
        this.expenseDateCreated = expenseDateCreated;
    }

    public BudgetEntity getBudget() {
        return budget;
    }

    public void setBudget(BudgetEntity budget) {
        this.budget = budget;
    }
}
