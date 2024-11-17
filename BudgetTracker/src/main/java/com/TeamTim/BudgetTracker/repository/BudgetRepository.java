package com.TeamTim.BudgetTracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.TeamTim.BudgetTracker.entity.BudgetEntity;

import java.util.List;

@Repository
public interface BudgetRepository extends JpaRepository<BudgetEntity, Integer> {
    List<BudgetEntity> findByUserUserId(int userId);
}
