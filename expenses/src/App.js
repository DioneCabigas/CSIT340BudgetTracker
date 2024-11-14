import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    { name: 'Shirts Adidas', amount: 150, date: '20/04/2024' }
  ]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const BUDGET = 2300;

  const totalItems = expenses.length;
  const totalSpend = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
  const remainingAmount = BUDGET - totalSpend;

  const handleAddExpense = () => {
    if (isEditing) {
      const updatedExpenses = expenses.map((expense, index) =>
        index === currentIndex ? { ...expense, name: expenseName, amount: Number(expenseAmount) } : expense
      );
      setExpenses(updatedExpenses);
      setIsEditing(false);
    } else {
      setExpenses([...expenses, { name: expenseName, amount: Number(expenseAmount), date: new Date().toLocaleDateString() }]);
    }
    setExpenseName('');
    setExpenseAmount('');
  };

  const handleDeleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const handleEditExpense = (index) => {
    const expense = expenses[index];
    setExpenseName(expense.name);
    setExpenseAmount(expense.amount);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '20%', background: '#f8f9fa', padding: '20px' }}>
        <h2>Logoipsum</h2>
        <ul>
          <li>Dashboard</li>
          <li>Budgets</li>
          <li>Expenses</li>
          <li>Upgrade</li>
        </ul>
      </aside>

      <main style={{ width: '80%', padding: '20px' }}>
        <h1>My Expenses</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ width: '45%', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Shopping</h2>
            <p>{totalItems} Item{totalItems !== 1 ? 's' : ''}</p>
            <h3>${totalSpend}</h3>
            <p style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>${totalSpend} Spend</span>
              <span>${remainingAmount} Remaining</span>
            </p>
          </div>

          <div style={{ width: '45%', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>{isEditing ? 'Edit Expense' : 'Add Expense'}</h2>
            <input
              type="text"
              placeholder="Expense Name"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
            />
            <input
              type="number"
              placeholder="Expense Amount"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
              style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
            />
            <button onClick={handleAddExpense} style={{ width: '100%', padding: '10px', backgroundColor: '#7a5cfa', color: '#fff', border: 'none', borderRadius: '8px' }}>
              {isEditing ? 'Update Expense' : 'Add New Expense'}
            </button>
          </div>
        </div>

        <h2>Latest Expenses</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index} style={{ textAlign: 'center' }}>
                <td>{expense.name}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
                <td>
                  <button onClick={() => handleEditExpense(index)} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer', marginRight: '10px' }}>
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDeleteExpense(index)} style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
