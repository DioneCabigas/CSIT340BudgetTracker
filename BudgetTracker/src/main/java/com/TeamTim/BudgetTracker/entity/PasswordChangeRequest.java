package com.TeamTim.BudgetTracker.entity;

public class PasswordChangeRequest {

    private int userId;
    private String oldPassword;
    private String newPassword;

    // Default constructor
    public PasswordChangeRequest() {}

    // Parameterized constructor
    public PasswordChangeRequest(int userId, String oldPassword, String newPassword) {
        this.userId = userId;
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
    }

    // Getters and Setters
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getOldPassword() {
        return oldPassword;
    }

    public void setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
}
