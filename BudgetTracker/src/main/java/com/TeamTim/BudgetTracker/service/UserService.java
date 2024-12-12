package com.TeamTim.BudgetTracker.service;

import com.TeamTim.BudgetTracker.entity.UserEntity;
import com.TeamTim.BudgetTracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Create or update a user record
    public UserEntity postUserRecord(UserEntity user) {
        return userRepository.save(user);
    }

    // Get user by email
    public UserEntity getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    // Get user by ID
    public UserEntity getUserById(int userId) {
        return userRepository.findById(userId).orElse(null); // Return null if not found
    }

    // Change user password
    public boolean changePassword(String oldPassword, String newPassword, int userId) {
        UserEntity user = userRepository.findById(userId).orElse(null);
        if (user != null && user.getPassword().equals(oldPassword)) {
            user.setPassword(newPassword);
            userRepository.save(user);  // Save the updated user with new password
            return true;
        }
        return false;  // Return false if the old password doesn't match
    }
}
