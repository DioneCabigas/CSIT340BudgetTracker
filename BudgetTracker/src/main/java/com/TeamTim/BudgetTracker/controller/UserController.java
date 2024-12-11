package com.TeamTim.BudgetTracker.controller;

import com.TeamTim.BudgetTracker.entity.ResponseMessage;
import com.TeamTim.BudgetTracker.entity.UserEntity;
import com.TeamTim.BudgetTracker.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    // Create or update a user record (Registration)
    @PostMapping("/register")
    public ResponseEntity<UserEntity> registerUser(@RequestBody UserEntity user) {
        UserEntity registeredUser = userService.postUserRecord(user);
        return ResponseEntity.ok(registeredUser);  // Returns the created user object
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserEntity user) {
        UserEntity existingUser = userService.getUserByEmail(user.getEmail());
    
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            // Return a JSON response with a success message
            return ResponseEntity.ok(new ResponseMessage("Login successful!"));
        } else {
            // Return a JSON response with an error message
            return ResponseEntity.status(401).body(new ResponseMessage("Invalid credentials"));
        }
    }
    
}
