import React, { useState } from "react";
import { FaShoppingBag, FaCar, FaEdit, FaTrash, FaHome, FaUtensils, FaPlane, FaHeartbeat, FaGamepad, FaBook, FaPiggyBank, FaChartLine, FaPaw, FaLaptop, FaLightbulb, FaBath, FaSpotify } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { TextField, Button } from "@mui/material";

const Budgets = () => {
  const [budgets, setBudgets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedBudgetIndex, setSelectedBudgetIndex] = useState(null);
  const [newBudgetName, setNewBudgetName] = useState("");
  const [newBudgetAllocation, setNewBudgetAllocation] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleDeleteBudget = (index) => {
    setBudgets(budgets.filter((_, i) => i !== index));
  };

  const handleAddOrEditBudget = () => {
    if (!newBudgetName || !newBudgetAllocation || !selectedIcon) {
      alert("Please fill all fields");
      return;
    }

    if (isEditMode) {
      const updatedBudgets = [...budgets];
      updatedBudgets[selectedBudgetIndex] = {
        name: newBudgetName,
        amount: Number(newBudgetAllocation),
        spent: 0,
        icon: selectedIcon,
      };
      setBudgets(updatedBudgets);
    } else {
      setBudgets([
        ...budgets,
        { name: newBudgetName, amount: Number(newBudgetAllocation), spent: 0, icon: selectedIcon },
      ]);
    }

    setIsModalOpen(false);
    setIsEditMode(false);
    setNewBudgetName("");
    setNewBudgetAllocation("");
    setSelectedIcon(null);
  };

  const handleEditBudget = (index) => {
    const budget = budgets[index];
    setNewBudgetName(budget.name);
    setNewBudgetAllocation(budget.amount);
    setSelectedIcon(budget.icon);
    setSelectedBudgetIndex(index);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const iconOptions = [
    { id: "shopping", icon: <FaShoppingBag />, label: "Shopping" },
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "food", icon: <FaUtensils />, label: "Food & Dining" },
    { id: "travel", icon: <FaPlane />, label: "Travel" },
    { id: "fitness", icon: <FaHeartbeat />, label: "Health & Fitness" },
    { id: "entertainment", icon: <FaGamepad />, label: "Entertainment" },
    { id: "education", icon: <FaBook />, label: "Education" },
    { id: "savings", icon: <FaPiggyBank />, label: "Savings" },
    { id: "investments", icon: <FaChartLine />, label: "Investments" },
    { id: "transportation", icon: <FaCar />, label: "Transportation" },
    { id: "pets", icon: <FaPaw />, label: "Pets" },
    { id: "technology", icon: <FaLaptop />, label: "Technology" },
    { id: "utilities", icon: <FaLightbulb />, label: "Utilities" },
    { id: "personal-care", icon: <FaBath />, label: "Personal Care" },
    { id: "subscriptions", icon: <FaSpotify />, label: "Subscriptions" },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      <Sidebar />
      
      <main style={{ flex: 1, padding: "2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          <div
            onClick={() => setIsModalOpen(true)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "150px",
              border: "2px dashed #ddd",
              borderRadius: "10px",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
          >
            + Create New Budget
          </div>
          {budgets.map((budget, index) => {
            const remaining = budget.amount - budget.spent;
            return (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "1rem",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ fontSize: "2rem", color: "#7a5cfa", marginRight: "0.75rem" }}>{budget.icon}</div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: "600", color: "#333" }}>
                        {budget.name}
                      </h3>
                      <p style={{ margin: 0, fontSize: "0.875rem", color: "#666" }}>
                        {Math.ceil(budget.spent / 1000)} Item{Math.ceil(budget.spent / 1000) !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "600", color: "#333" }}>${budget.amount}</h2>
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.875rem",
                      color: "#666",
                      margin: "0.5rem 0",
                    }}
                  >
                    <span>${budget.spent} Spent</span>
                    <span style={{ color: remaining < 0 ? "red" : "green" }}>${remaining} Remaining</span>
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
                        width: `${(budget.spent / budget.amount) * 100}%`,
                        backgroundColor: "#7a5cfa",
                        borderRadius: "4px",
                        transition: "width 0.3s ease",
                      }}
                    ></div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem", marginTop: "1rem" }}>
                  <button
                    onClick={() => handleEditBudget(index)}
                    style={{ background: "none", border: "none", color: "#7a5cfa", cursor: "pointer" }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteBudget(index)}
                    style={{ background: "none", border: "none", color: "red", cursor: "pointer" }}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Modal for Adding or Editing Budget */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
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
              borderRadius: "8px",
              width: "400px",
            }}
          >
            <h2 style={{ marginBottom: "2rem", textAlign: "center" }}>
              {isEditMode ? "Edit Budget" : "Create New Budget"}
            </h2>
            <div style={{ marginBottom: "1rem" }}>
              <TextField
                fullWidth
                label="Budget Name"
                variant="outlined"
                value={newBudgetName}
                onChange={(e) => setNewBudgetName(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <TextField
                fullWidth
                label="Budget Allocation"
                variant="outlined"
                type="number"
                value={newBudgetAllocation}
                onChange={(e) => setNewBudgetAllocation(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  overflowX: "scroll",
                  padding: "0.5rem 0",
                }}
              >
                {iconOptions.map((icon) => (
                  <div
                    key={icon.id}
                    onClick={() => setSelectedIcon(icon.icon)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      cursor: "pointer",
                      backgroundColor: selectedIcon === icon.icon ? "#ddd" : "transparent",
                      borderRadius: "50%",
                    }}
                  >
                    {icon.icon}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                onClick={() => setIsModalOpen(false)}
                variant="outlined"
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleAddOrEditBudget}
                variant="contained"
                color="primary"
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                  backgroundColor: "#7a5cfa",
                  color: "#fff",
                }}
              >
                {isEditMode ? "Update Budget" : "Add Budget"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Budgets;
