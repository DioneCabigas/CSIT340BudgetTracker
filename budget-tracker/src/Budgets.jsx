import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import Sidebar from './Sidebar';

function Budgets() {
  const [budgetName, setBudgetName] = useState('');
  const [budgetAllocation, setBudgetAllocation] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [budgets, setBudgets] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const icons = ["🛍️", "🏠", "🍔", "✈️", "💪", "🎮", "📚", "💰"];

  const styles = {
    container: {
      padding: '20px',
    },
    inputGroup: {
      marginBottom: '10px',
    },
    inputLabel: {
      display: 'block',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginTop: '5px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      marginTop: '10px',
    },
    budgetList: {
      marginTop: '20px',
    },
    budgetItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#f0f0f0',
      padding: '10px',
      margin: '5px 0',
      cursor: 'pointer', // Make the budget item clickable
    },
    budgetIcon: {
      fontSize: '20px',
    },
    budgetName: {
      marginLeft: '10px',
    },
    deleteButton: {
      padding: '5px 10px',
      backgroundColor: 'red',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
    },
  };

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
    // Navigate to the Expense page and pass the selected budget in the URL
    navigate(`/expense`, { state: { budget } });
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Create a New Budget</h2>

        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="budgetName" style={styles.inputLabel}>Budget Name</label>
            <input
              type="text"
              id="budgetName"
              value={budgetName}
              onChange={(e) => setBudgetName(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="budgetAllocation" style={styles.inputLabel}>Budget Allocation</label>
            <input
              type="number"
              id="budgetAllocation"
              value={budgetAllocation}
              onChange={(e) => setBudgetAllocation(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="icon" style={styles.inputLabel}>Select an Icon</label>
            <select
              id="icon"
              value={selectedIcon}
              onChange={(e) => setSelectedIcon(e.target.value)}
              style={styles.input}
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

          <button type="submit" style={styles.button}>Create Budget</button>
        </form>

        <h3>Your Created Budgets</h3>
        <div style={styles.budgetList}>
          {budgets.length > 0 ? (
            budgets.map((budget, index) => (
              <div
                key={index}
                style={styles.budgetItem}
                onClick={() => handleBudgetClick(budget)} // Handle click event
              >
                <span style={styles.budgetIcon}>{budget.icon}</span>
                <span style={styles.budgetName}>{budget.budgetName}</span>
                <span>{budget.budgetAmountAllocated}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent clicking from triggering handleBudgetClick
                    handleDelete(budget.budgetName);
                  }}
                  style={styles.deleteButton}
                >
                  Delete
                </button>
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
