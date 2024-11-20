import React, { useState } from "react";
import { FaShoppingBag, FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const budget_allocation_amount = 2300;
  const budget_name = "Shopping";

  const totalItems = expenses.length; 
  const totalSpend = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );
  const remainingAmount = budget_allocation_amount - totalSpend;

  const handleAddExpense = () => {
    if (isEditing) {
      const updatedExpenses = expenses.map((expense, index) =>
        index === currentIndex
          ? { ...expense, name: expenseName, amount: Number(expenseAmount), date: expense.date }
          : expense
      );
      setExpenses(updatedExpenses);
      setIsEditing(false);
    } else {
      setExpenses([
        ...expenses,
        {
          name: expenseName,
          amount: Number(expenseAmount),
          date: new Date().toLocaleDateString(),
        },
      ]);
    }
    setExpenseName("");
    setExpenseAmount("");
  };

  const handleDeleteExpense = () => {
    setExpenses(expenses.filter((_, i) => i !== deleteIndex));
    setIsDeleteConfirmOpen(false);
    setDeleteIndex(null);
  };

  const handleEditExpense = (index) => {
    const expense = expenses[index];
    setExpenseName(expense.name);
    setExpenseAmount(expense.amount);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const openDeleteConfirmation = (index) => {
    setDeleteIndex(index);
    setIsDeleteConfirmOpen(true);
  };

  const closeDeleteConfirmation = () => {
    setIsDeleteConfirmOpen(false);
    setDeleteIndex(null);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      <Sidebar />
      
      <main style={{ flex: 1, padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "60%",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              padding: "1.5rem",
              border: "1px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              width: "100%",
              maxWidth: "750px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5rem" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaShoppingBag style={{ fontSize: "3.85rem", color: "#7a5cfa", marginRight: "1rem" }} />
                <div>
                  <h2 style={{ margin: 0, fontSize: "1.75rem", color: "#333", fontWeight: "600" }}>{budget_name}</h2>
                  <p style={{ margin: 0, fontSize: "1rem", color: "#666" }}>
                    {totalItems} Item{totalItems !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
              <div>
                <h2 style={{ margin: 0, fontSize: "1.85rem", color: "#333", fontWeight: "600" }}>${budget_allocation_amount}</h2>
              </div>
            </div>

            <div>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.95rem",
                  color: "#666",
                  marginBottom: "0.5rem",
                }}
              >
                <span>${totalSpend} Spend</span>
                <span
                  style={{
                    color: remainingAmount < 0 ? "red" : "green",
                  }}
                >
                  ${remainingAmount} Remaining
                </span>
              </p>
              <div
                style={{
                  height: "8px",
                  width: "100%",
                  backgroundColor: "#f0f0f0",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${(totalSpend / budget_allocation_amount) * 100}%`,
                    backgroundColor: "#7a5cfa",
                    borderRadius: "4px",
                    transition: "width 0.3s ease",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              padding: "1rem",
              border: "1px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              width: "100%",
              maxWidth: "750px",
            }}
          >
            <h2 style={{ fontSize: "1.rem", marginBottom: "1rem", color: "#333", fontWeight: "600", }}>
              {isEditing ? "Edit Expense" : "Add Expense"}
            </h2>

            <input
              type="text"
              placeholder="Expense Name"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              style={{
                width: "100%",
                maxWidth: "590px",
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
                maxWidth: "590px",
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
          </div>
        </div>

        <h2 style={{ fontSize: "1.5rem", margin: "1.5rem 0", color: "#333", fontWeight: "600" }}>Latest Expenses</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#fff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#7a5cfa", color: "#fff", textAlign: "center" }}>
              <th style={{ padding: "10px" }}>Name</th>
              <th style={{ padding: "10px" }}>Amount</th>
              <th style={{ padding: "10px" }}>Date</th>
              <th style={{ padding: "10px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index} style={{ textAlign: "center", borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "10px" }}>{expense.name}</td>
                <td style={{ padding: "10px" }}>{expense.amount}</td>
                <td style={{ padding: "10px" }}>{expense.date}</td>
                <td style={{ padding: "10px" }}>
                  <button
                    onClick={() => handleEditExpense(index)}
                    style={{ background: "none", border: "none", color: "blue", cursor: "pointer" }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => openDeleteConfirmation(index)}
                    style={{ background: "none", border: "none", color: "red", cursor: "pointer" }}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isDeleteConfirmOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "2rem",
                borderRadius: "5px",
                textAlign: "center",
                width: "300px",
              }}
            >
              <h3 style={{ margin: 0, fontSize: "1.25rem", color: "#333" }}>Are you sure you want to delete this expense?</h3>
              <div style={{ marginTop: "1rem" }}>
                <button
                  onClick={handleDeleteExpense}
                  style={{
                    marginRight: "10px",
                    backgroundColor: "red",
                    color: "white",
                    padding: "0.5rem 1rem",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  Yes
                </button>
                <button
                  onClick={closeDeleteConfirmation}
                  style={{
                    backgroundColor: "#ddd",
                    color: "black",
                    padding: "0.5rem 1rem",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Expenses;
