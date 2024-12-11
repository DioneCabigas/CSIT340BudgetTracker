import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

function Expense() {
  const [expenses, setExpenses] = useState([]);
  const location = useLocation();
  const { budget } = location.state || {}; // Get the budget passed from Budgets.jsx

  // Fetch expenses for the budget
  const fetchExpenses = async (budgetName) => {
    try {
      const response = await fetch(`http://localhost:8080/api/expense/getExpensesByBudgetName?budgetName=${budgetName}`);
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  // Default to the first budget if no budget is selected
  useEffect(() => {
    if (!budget) {
      fetchExpenses('First Budget Name'); // Replace 'First Budget Name' with actual first budget name
    } else {
      fetchExpenses(budget.budgetName);
    }
  }, [budget]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Expenses for {budget?.budgetName || 'First Budget'}</h2>

        {/* Display Budget Icon, Name, and Allocation */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{ fontSize: '30px', marginRight: '20px' }}>{budget?.icon || '🛍️'}</span>
          <div>
            <h3>{budget?.budgetName || 'First Budget'}</h3>
            <p>Allocation: ${budget?.budgetAmountAllocated || 0}</p>
          </div>
        </div>

        {/* Display Expenses List */}
        <div>
          <h3>Your Expenses</h3>
          {expenses.length > 0 ? (
            <ul>
              {expenses.map((expense, index) => (
                <li key={index}>
                  {expense.expenseName}: ${expense.expenseAmount}
                </li>
              ))}
            </ul>
          ) : (
            <p>No expenses for this budget yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Expense;
