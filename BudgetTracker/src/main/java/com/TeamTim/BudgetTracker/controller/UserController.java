package com.TeamTim.BudgetTracker.controller;

import com.TeamTim.BudgetTracker.entity.ResponseMessage;
import com.TeamTim.BudgetTracker.entity.PasswordChangeRequest;
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

    @GetMapping("/{userId}")
    public ResponseEntity<UserEntity> getUserDetails(@PathVariable int userId) {
        UserEntity user = userService.getUserById(userId);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(404).body(null); // User not found
        }
    }

    // Update user details by user ID
    @PutMapping("/{userId}")
    public ResponseEntity<UserEntity> updateUser(@PathVariable int userId, @RequestBody UserEntity user) {
        UserEntity existingUser = userService.getUserById(userId);
        if (existingUser != null) {
            existingUser.setUsername(user.getUsername());
            existingUser.setEmail(user.getEmail());
            existingUser.setProfilePicture(user.getProfilePicture()); // Optional if you want to update the profile picture
            UserEntity updatedUser = userService.postUserRecord(existingUser);
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.status(404).body(null); // User not found
        }
    }

    @PutMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody PasswordChangeRequest passwordChangeRequest) {
        boolean isChanged = userService.changePassword(passwordChangeRequest.getOldPassword(), passwordChangeRequest.getNewPassword(), passwordChangeRequest.getUserId());

        if (isChanged) {
            return ResponseEntity.ok(new ResponseMessage("Password changed successfully"));
        } else {
            return ResponseEntity.status(400).body(new ResponseMessage("Failed to change password. Please check your old password."));
        }
    }
}
