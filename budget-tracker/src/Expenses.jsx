import { useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { Button, TextField } from "@mui/material";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Expenses = () => {
  const location = useLocation();
  const { budget } = location.state || {}; // Get the budget passed from Budgets.jsx

  const [expenses, setExpenses] = useState([
    { name: "Shirts Adidas", amount: 150, date: "20/04/2024" },
  ]);

  const [newExpense, setNewExpense] = useState({
    name: "",
    amount: "",
  });

  const [sortConfig, setSortConfig] = useState({
    key: "amount",
    direction: "asc",
  });

  if (!budget) {
    return <div>No budget selected</div>;
  }

  const handleDeleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (newExpense.name && newExpense.amount) {
      const updatedExpenses = [
        ...expenses,
        {
          name: newExpense.name,
          amount: parseFloat(newExpense.amount),
          date: new Date().toLocaleDateString(),
        },
      ];
      setExpenses(updatedExpenses);

      // Clear the input fields
      setNewExpense({ name: "", amount: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
  const remaining = budget.amount - totalSpent;
  const progressBarWidth = Math.min((totalSpent / budget.amount) * 100, 100); // Ensure it caps at 100%

  const sortExpenses = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    const sortedExpenses = [...expenses].sort((a, b) => {
      if (key === "amount") {
        return direction === "asc" ? a[key] - b[key] : b[key] - a[key];
      } else {
        return direction === "asc"
          ? new Date(a[key]) - new Date(b[key])
          : new Date(b[key]) - new Date(a[key]);
      }
    });
    setExpenses(sortedExpenses);
    setSortConfig({ key, direction });
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Sidebar />

      {/* Main Content */}
      <main style={{ flex: 1, padding: "2rem" }}>
        <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
          {/* Budget Card */}
          <div
            style={{
              width: "60%",
              height: "auto",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
              backgroundColor: "#fff",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              fontSize: "1.1rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ fontSize: "2.5rem", marginRight: "1rem" }}>{budget.icon}</div>
                <div>
                  <h3 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "600", color: "#333" }}>
                    {budget.name}
                  </h3>
                  <p style={{ margin: 0, fontSize: "1rem", color: "#666" }}>{expenses.length} Items</p>
                </div>
              </div>
              <h2 style={{ margin: 0, fontSize: "2rem", fontWeight: "600", color: "#333" }}>${budget.amount}</h2>
            </div>
            <div style={{ marginTop: "0.5rem" }}>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "1rem",
                  color: "#666",
                }}
              >
                <span>${totalSpent} Spent</span>
                <span style={{ color: remaining < 0 ? "red" : "green" }}>${remaining} Remaining</span>
              </p>

              <div
                style={{
                  height: "20px",
                  background: "#ddd",
                  borderRadius: "5px",
                  marginTop: "0.1rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${progressBarWidth}%`,
                    background: remaining < 0 ? "red" : "green",
                    borderRadius: "5px",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Add Expense Card */}
          <div
            style={{
              width: "40%",
              height: "auto",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
              backgroundColor: "#fff",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center the contents
              justifyContent: "center", // Center the contents
            }}
          >
            <h2 style={{ margin: 1, fontSize: "1.8rem", fontWeight: "600", color: "#333" }}>
              Add New Expense
            </h2>
            <form style={{ marginTop: "2rem", width: "100%" }} onSubmit={handleAddExpense}>
              <TextField
                name="name"
                label="Expense Name"
                variant="outlined"
                fullWidth
                style={{ marginBottom: "1rem" }}
                value={newExpense.name}
                onChange={handleInputChange}
              />
              <TextField
                name="amount"
                label="Expense Amount"
                variant="outlined"
                type="number"
                fullWidth
                style={{ marginBottom: "1rem" }}
                value={newExpense.amount}
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{
                  marginTop: "1rem",
                  backgroundColor: "#2f27ce", // New button color
                }}
              >
                Create Expense
              </Button>
            </form>
          </div>
        </div>

        {/* Expenses Table */}
        <div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#333", marginBottom: "1rem" }}>
            Latest Expenses
          </h3>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "1px solid #ddd",
              backgroundColor: "#fff",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f1f1f1" }}>
                <th
                  style={{ padding: "10px", textAlign: "left", cursor: "pointer" }}
                  onClick={() => sortExpenses("name")}
                >
                  Name
                </th>
                <th
                  style={{ padding: "10px", textAlign: "left", cursor: "pointer" }}
                  onClick={() => sortExpenses("amount")}
                >
                  Amount
                </th>
                <th
                  style={{ padding: "10px", textAlign: "left", cursor: "pointer" }}
                  onClick={() => sortExpenses("date")}
                >
                  Date
                </th>
                <th style={{ padding: "10px", textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "10px" }}>{expense.name}</td>
                  <td style={{ padding: "10px" }}>${expense.amount}</td>
                  <td style={{ padding: "10px" }}>{expense.date}</td>
                  <td style={{ padding: "10px", textAlign: "center" }}>
                    <button
                      onClick={() => handleDeleteExpense(index)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Expenses;