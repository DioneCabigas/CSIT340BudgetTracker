package com.TeamTim.BudgetTracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.TeamTim.BudgetTracker.entity.UserEntity;
import com.TeamTim.BudgetTracker.service.UserService;

import java.util.List;

@RestController
@RequestMapping(method = RequestMethod.GET, path = "/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/print")
    public String print() {
        return "Hello, User";
    }

    @PostMapping("/postUserRecord")
    public UserEntity postUserRecord(@RequestBody UserEntity user) {
        return userService.postUserRecord(user);
    }

    @GetMapping("/getAllUsers")
    public List<UserEntity> getAllUsers() {
        return userService.getAllUsers();
    }
}

