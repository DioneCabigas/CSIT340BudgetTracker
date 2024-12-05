import { useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { Button, TextField } from "@mui/material";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Expenses = () => {
<<<<<<< Updated upstream
  const [expenses, setExpenses] = useState([
    { name: "Adobobots", amount: 150, date: "20/04/2024" },
  ]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const BUDGET = 2300;

  const totalItems = expenses.length; 
  const totalSpend = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );
  const remainingAmount = BUDGET - totalSpend;
=======
  const location = useLocation();
  const { budget } = location.state || {}; // Get the budget passed from Budgets.jsx

  const [expenses, setExpenses] = useState([
    { name: "Shirts Adidas", amount: 150, date: "20/04/2024" },
  ]);

  const [newExpense, setNewExpense] = useState({
    name: "",
    amount: "",
  });
>>>>>>> Stashed changes

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

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Sidebar />
<<<<<<< Updated upstream
=======

      {/* Main Content */}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
              width: "100%",
              maxWidth: "650px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <FaShoppingBag style={{ fontSize: "2rem", color: "#7a5cfa", marginRight: "0.75rem" }} />
              <div>
                <h3 style={{ margin: 0, fontSize: "1.25rem", color: "#333", fontWeight: "600" }}>Shopping</h3>
                <p style={{ margin: 0, fontSize: "0.875rem", color: "#666" }}>
                  {totalItems} Item{totalItems !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <h2 style={{ margin: 0, fontSize: "1.75rem", color: "#333", fontWeight: "600" }}>${BUDGET}</h2>
            </div>
            <div>
=======
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
              <h2 style={{ margin: 0, fontSize: "2rem", fontWeight: "600", color: "#333" }}>
                ${budget.amount}
              </h2>
            </div>
            <div style={{ marginTop: "0.5rem" }}>
>>>>>>> Stashed changes
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
<<<<<<< Updated upstream
                  fontSize: "0.875rem",
=======
                  fontSize: "1rem",
>>>>>>> Stashed changes
                  color: "#666",
                }}
              >
                <span>${totalSpent} Spent</span>
                <span style={{ color: remaining < 0 ? "red" : "green" }}>
                  ${remaining} Remaining
                </span>
              </p>

              <div
                style={{
                  height: "20px",
                  background: "#ddd",
                  borderRadius: "5px",
                  marginTop: "0.1rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    height: "100%",
<<<<<<< Updated upstream
                    width: `${(totalSpend / BUDGET) * 100}%`,
                    backgroundColor: "#7a5cfa",
                    borderRadius: "4px",
                    transition: "width 0.3s ease",
=======
                    width: `${progressBarWidth}%`,
                    background: "#7a5cfa",
                    borderRadius: "5px",
>>>>>>> Stashed changes
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Add Expense Card */}
          <div
            style={{
<<<<<<< Updated upstream
              flex: 1,
              padding: "1.5rem",
=======
              width: "40%",
              height: "auto",
>>>>>>> Stashed changes
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
              backgroundColor: "#fff",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
<<<<<<< Updated upstream
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#333", fontWeight: "600" }}>
              {isEditing ? "Edit Expense" : "Add Expense"}
            </h2>
            <input
              type="text"
              placeholder="Expense Name"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              style={{
                width: "100%",
                maxWidth: "675px",
                marginBottom: "1rem",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
            />
            <input
              type="number"
              placeholder="Expense Amount"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
              style={{
                width: "100%",
                maxWidth: "675px",
                marginBottom: "1rem",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
            />
            <button
              onClick={handleAddExpense}
              disabled={!expenseName || !expenseAmount}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#7a5cfa",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontWeight: "600",
                cursor: !expenseName || !expenseAmount ? "not-allowed" : "pointer",
                opacity: !expenseName || !expenseAmount ? 0.5 : 1,
              }}
            >
              {isEditing ? "Edit Expense" : "Add New Expense"}
            </button>
=======
            <h1 style={{ margin: 0, fontSize: "1.50rem", fontWeight: "600", color: "#333" }}>
              Add Expense
            </h1>
            <form style={{ marginTop: "1rem" }} onSubmit={handleAddExpense}>
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
                style={{ marginTop: "1rem" }}
              >
                Add New Expense
              </Button>
            </form>
>>>>>>> Stashed changes
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
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={{ padding: "10px", textAlign: "left" }}>Name</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Amount</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Date</th>
                <th style={{ padding: "10px", textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
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
