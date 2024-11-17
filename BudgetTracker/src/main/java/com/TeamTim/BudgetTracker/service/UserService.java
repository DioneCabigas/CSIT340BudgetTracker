package com.TeamTim.BudgetTracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TeamTim.BudgetTracker.entity.UserEntity;
import com.TeamTim.BudgetTracker.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository urepo;

    public UserService() {
        super();
    }

    public UserEntity postUserRecord(UserEntity user) {
        return urepo.save(user);
    }

    public List<UserEntity> getAllUsers() {
        return urepo.findAll();
    }
}
