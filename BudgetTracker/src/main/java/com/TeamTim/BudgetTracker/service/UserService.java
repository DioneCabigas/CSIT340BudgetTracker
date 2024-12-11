package com.TeamTim.BudgetTracker.service;

import com.TeamTim.BudgetTracker.entity.UserEntity;
import com.TeamTim.BudgetTracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserService() {
        super();
    }

    // Create or update a user record
    public UserEntity postUserRecord(UserEntity user) {
        return userRepository.save(user);
    }

    // Get user by email
    public UserEntity getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
