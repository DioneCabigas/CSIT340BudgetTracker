package com.TeamTim.BudgetTracker.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "BUDGET")
public class BudgetEntity {

    @Id
    @Column(name = "budget_name")
    private String budgetName;

    @Column(name = "budget_amount_allocated")
    private double budgetAmountAllocated;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private UserEntity user;

    @Column(name = "icon")
    private String icon;

    public BudgetEntity() {
        super();
    }

    public BudgetEntity(String budgetName, double budgetAmountAllocated, UserEntity user, String icon) {
        super();
        this.budgetName = budgetName;
        this.budgetAmountAllocated = budgetAmountAllocated;
        this.user = user;
        this.icon = icon;
    }

    public String getBudgetName() {
        return budgetName;
    }

    public void setBudgetName(String budgetName) {
        this.budgetName = budgetName;
    }

    public double getBudgetAmountAllocated() {
        return budgetAmountAllocated;
    }

    public void setBudgetAmountAllocated(double budgetAmountAllocated) {
        this.budgetAmountAllocated = budgetAmountAllocated;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }
}
