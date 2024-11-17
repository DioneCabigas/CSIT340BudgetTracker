package com.TeamTim.BudgetTracker.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDate;

@Entity
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    private String name;
    private String email;
    private String password;
    private LocalDate dateAccountCreated;
    private String profileInformation;

    public UserEntity() {
        super();
    }

    public UserEntity(int userId, String name, String email, String password, LocalDate dateAccountCreated, String profileInformation) {
        super();
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.dateAccountCreated = dateAccountCreated;
        this.profileInformation = profileInformation;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDate getDateAccountCreated() {
        return dateAccountCreated;
    }

    public void setDateAccountCreated(LocalDate dateAccountCreated) {
        this.dateAccountCreated = dateAccountCreated;
    }

    public String getProfileInformation() {
        return profileInformation;
    }

    public void setProfileInformation(String profileInformation) {
        this.profileInformation = profileInformation;
    }
}

