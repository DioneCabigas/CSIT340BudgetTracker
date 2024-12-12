import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

function Expenses() {
  const { state } = useLocation();
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();

  const budget = state?.budget;

  useEffect(() => {
    if (budget) {
      fetchExpenses(budget.budgetName);
    }
  }, [budget]);

  const fetchExpenses = async (budgetName) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/expense/getExpensesByBudgetName?budgetName=${budgetName}`
      );
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExpense = {
      expenseName,
      expenseAmountSpent: expenseAmount,
      expenseDateCreated: expenseDate,
      budget: { budgetName: budget.budgetName },
    };

    try {
      const response = await fetch(
        'http://localhost:8080/api/expense/postexpenserecord',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newExpense),
        }
      );

      if (response.ok) {
        setExpenseName('');
        setExpenseAmount('');
        setExpenseDate('');
        fetchExpenses(budget.budgetName);
      } else {
        console.error('Failed to create expense');
      }
    } catch (error) {
      console.error('Error creating expense:', error);
    }
  };

  const handleDeleteExpense = async (expenseId) => {
    console.log('Expense ID:', expenseId);  // For debugging, log the ID to the console
    try {
      const response = await fetch(`http://localhost:8080/api/expense/deleteExpense/${expenseId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setExpenses(expenses.filter((expense) => expense.expenseId !== expenseId));  // Use expenseId here
      } else {
        console.error('Failed to delete expense');
      }
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  const handleDeleteBudget = async () => {
    if (window.confirm('Are you sure you want to delete this budget?')) {
      try {
        const response = await fetch(
          `http://localhost:8080/api/budget/${budget.budgetName}`,
          {
            method: 'DELETE',
          }
        );

        if (response.ok) {
          navigate('/budgets'); // Redirect to the list of budgets after deletion
        } else {
          console.error('Failed to delete budget');
        }
      } catch (error) {
        console.error('Error deleting budget:', error);
      }
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '2rem' }}>
        <div
          style={{
            backgroundColor: '#fff',
            padding: '1.5rem',
            marginBottom: '1.5rem',
            borderRadius: '8px',
            border: '1px solid #ddd',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '24px' }}>{budget?.icon}</span>
            <div style={{ flex: 1, marginLeft: '15px' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>{budget?.budgetName}</p>
              <p style={{ margin: 0, color: '#4CAF50', fontWeight: 'bold' }}>
                ${budget?.budgetAmountAllocated}
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={handleDeleteBudget}
              style={{
                padding: '10px 15px',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </div>
        </div>

        <div
          style={{
            padding: '1.5rem',
            borderRadius: '8px',
            border: '1px solid #ddd',
            marginBottom: '1rem',
          }}
        >
          <h2 style={{ fontSize: '18px', margin: '0 0 1rem 0' }}>Add a New Expense</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '0.8rem' }}>
              <label style={{ fontWeight: 'bold', fontSize: '14px' }}>Expense Name</label>
              <input
                type="text"
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
                style={{
                  width: '98.5%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  marginTop: '5px',
                  fontSize: '14px',
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '0.8rem' }}>
              <label style={{ fontWeight: 'bold', fontSize: '14px' }}>Expense Amount</label>
              <input
                type="number"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                style={{
                  width: '98.5%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  marginTop: '5px',
                  fontSize: '14px',
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '0.8rem' }}>
              <label style={{ fontWeight: 'bold', fontSize: '14px' }}>Expense Date</label>
              <input
                type="date"
                value={expenseDate}
                onChange={(e) => setExpenseDate(e.target.value)}
                style={{
                  width: '98.5%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  marginTop: '5px',
                  fontSize: '14px',
                }}
                required
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Add Expense
            </button>
          </form>
        </div>

        <h3 style={{ marginBottom: '1rem' }}>Your Expenses</h3>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '2rem',
            backgroundColor: '#fff',
            borderRadius: '8px',
            border: '1px solid #ddd',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4', textAlign: 'left' }}>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Name</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Amount</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Date</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length > 0 ? (
              expenses.map((expense, index) => (
                <tr key={index}>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>{expense.expenseName}</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>${expense.expenseAmountSpent}</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    {new Date(expense.expenseDateCreated).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>
                    <button
                      onClick={() => handleDeleteExpense(expense.expenseId)}  // Use expense.expenseId here
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#dc3545',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', padding: '12px', border: '1px solid #ddd' }}>
                  No expenses available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Expenses;
