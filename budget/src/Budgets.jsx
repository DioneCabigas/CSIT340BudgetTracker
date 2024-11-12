import React from 'react';
import './Budgets.css';
import { FaHome, FaCar, FaShoppingCart, FaHammer, FaYoutube, FaUser, FaSignOutAlt, FaListUl, FaPiggyBank, FaFileInvoice } from 'react-icons/fa';

const Budgets = () => {
  const budgets = [
    { id: 1, icon: <FaShoppingCart />, name: 'Shopping', amount: 2300, items: 1, spent: 2300, remaining: 5000 },
    { id: 2, icon: <FaHammer />, name: 'Home Decor', amount: 3800, items: 3, spent: 3800, remaining: 1200 },
    { id: 3, icon: <FaHome />, name: 'Garden', amount: 1500, items: 2, spent: 1500, remaining: 3500 },
    { id: 4, icon: <FaCar />, name: 'Car', amount: 2500, items: 1, spent: 2500, remaining: 3500 },
    { id: 5, icon: <FaYoutube />, name: 'YouTube', amount: 4000, items: 2, spent: 4000, remaining: 1000 },
  ];

  return (
    <div className="budget-container">
      <aside className="sidebar">
        <div className="logo">LOGO</div>
        <nav>
          <ul>
            <li><FaListUl /> Dashboard</li>
            <li className="active"><FaPiggyBank /> Budgets</li>
            <li><FaFileInvoice /> Expenses</li>
            <li><FaFileInvoice /> Upgrade</li>
          </ul>
        </nav>
        <div className="profile-section">
          <FaUser className="profile-icon" />
          <span>Profile</span>
          <FaSignOutAlt className="logout-icon" />
        </div>
      </aside>

      <main className="main-content">
        <h2>My Budgets</h2>
        <div className="budget-cards">
          {budgets.map((budget) => (
            <div key={budget.id} className="budget-card">
              <div className="card-icon">{budget.icon}</div>
              <div className="card-info">
                <h3>{budget.name}</h3>
                <p>{budget.items} Item{budget.items > 1 ? 's' : ''}</p>
                <h4>${budget.amount}</h4>
              </div>
              <div className="card-progress">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${(budget.spent / (budget.spent + budget.remaining)) * 100}%` }}
                  ></div>
                </div>
                <div className="card-stats">
                  <span>${budget.spent} Spent</span>
                  <span>${budget.remaining} Remaining</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Budgets;
