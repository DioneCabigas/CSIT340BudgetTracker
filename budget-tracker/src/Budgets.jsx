import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

function Budgets() {
  const [budgetName, setBudgetName] = useState('');
  const [budgetAllocation, setBudgetAllocation] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [budgets, setBudgets] = useState([]);
  const navigate = useNavigate();

  const icons = ["🛍️", "🏠", "🍔", "✈️", "💪", "🎮", "📚", "💰"];

  const fetchBudgets = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/budget');
      const data = await response.json();
      setBudgets(data);
    } catch (error) {
      console.error('Error fetching budgets:', error);
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBudget = {
      budgetName,
      budgetAmountAllocated: budgetAllocation,
      icon: selectedIcon,
      userId: 1,
    };

    try {
      const response = await fetch('http://localhost:8080/api/budget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBudget),
      });

      if (response.ok) {
        setBudgetName('');
        setBudgetAllocation('');
        setSelectedIcon('');
        fetchBudgets();
      } else {
        console.error('Failed to create budget');
      }
    } catch (error) {
      console.error('Error creating budget:', error);
    }
  };

  const handleDelete = async (budgetName) => {
    try {
      const response = await fetch(`http://localhost:8080/api/budget/${budgetName}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchBudgets();
      } else {
        console.error('Failed to delete budget');
      }
    } catch (error) {
      console.error('Error deleting budget:', error);
    }
  };

  const handleBudgetClick = (budget) => {
    navigate(`/expenses`, { state: { budget } });
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
          }}
        >
          <h1 style={{ margin: 0 }}>Hi, User!</h1>
          <p style={{ margin: '0.5rem 0' }}>
            Here's what's happening with your money. Let's manage your budgets.
          </p>
        </div>

        <div
          style={{
            padding: '1.5rem',
            borderRadius: '8px',
            border: '1px solid #ddd',
            marginBottom: '1rem',
          }}
        >
          <h2 style={{ fontSize: '18px', margin: '0 0 1rem 0' }}>Create a New Budget</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '0.8rem' }}>
              <label style={{ fontWeight: 'bold', fontSize: '14px' }}>Enter Budget Name</label>
              <input
                type="text"
                value={budgetName}
                onChange={(e) => setBudgetName(e.target.value)}
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
              <label style={{ fontWeight: 'bold', fontSize: '14px' }}>Enter Budget Allocation</label>
              
              <input
                type="number"
                value={budgetAllocation}
                onChange={(e) => setBudgetAllocation(e.target.value)}
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
              <label style={{ fontWeight: 'bold', fontSize: '14px' }}>Select an Icon</label>
              <select
                value={selectedIcon}
                onChange={(e) => setSelectedIcon(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  marginTop: '5px',
                  fontSize: '14px',
                }}
                required
              >
                <option value="">Select Icon</option>
                {icons.map((icon, index) => (
                  <option key={index} value={icon}>
                    {icon}
                  </option>
                ))}
              </select>
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
              Create Budget
            </button>
          </form>
        </div>

        <h3 style={{ marginBottom: '1rem' }}>Your Created Budgets</h3>
        <div>
          {budgets.length > 0 ? (
            budgets.map((budget, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 15px',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  marginBottom: '10px',
                  cursor: 'pointer',
                }}
                onClick={() => handleBudgetClick(budget)}
              >
                <span style={{ fontSize: '24px' }}>{budget.icon}</span>
                <div style={{ flex: 1, marginLeft: '15px' }}>
                  <p style={{ margin: 0, fontWeight: 'bold' }}>{budget.budgetName}</p>
                </div>
                <span style={{ fontWeight: 'bold', color: '#4CAF50' }}>
                  ${budget.budgetAmountAllocated}
                </span>
              </div>
            ))
          ) : (
            <p>No budgets created yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Budgets;
