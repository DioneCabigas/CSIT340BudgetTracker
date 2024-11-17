package com.TeamTim.BudgetTracker.entity;

import jakarta.persistence.*;


@Entity
public class BudgetEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int budgetId;

    private String budgetName;
    private double budgetAllocationAmount;
    private String description;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    public BudgetEntity() {
        super();
    }

    public BudgetEntity(int budgetId, String budgetName, double budgetAllocationAmount, String description, UserEntity user) {
        super();
        this.budgetId = budgetId;
        this.budgetName = budgetName;
        this.budgetAllocationAmount = budgetAllocationAmount;
        this.description = description;
        this.user = user;
    }

    public int getBudgetId() {
        return budgetId;
    }

    public void setBudgetId(int budgetId) {
        this.budgetId = budgetId;
    }

    public String getBudgetName() {
        return budgetName;
    }

    public void setBudgetName(String budgetName) {
        this.budgetName = budgetName;
    }

    public double getBudgetAllocationAmount() {
        return budgetAllocationAmount;
    }

    public void setBudgetAllocationAmount(double budgetAllocationAmount) {
        this.budgetAllocationAmount = budgetAllocationAmount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
}
