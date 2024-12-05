<<<<<<< Updated upstream
import React from "react";
=======
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
>>>>>>> Stashed changes
import Sidebar from "./Sidebar";

const Budgets = () => {
<<<<<<< Updated upstream

=======
  const [budgets, setBudgets] = useState(
    JSON.parse(localStorage.getItem("budgets")) || []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedBudgetIndex, setSelectedBudgetIndex] = useState(null);
  const [newBudgetName, setNewBudgetName] = useState("");
  const [newBudgetAllocation, setNewBudgetAllocation] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Sync budgets with localStorage whenever they change
    localStorage.setItem("budgets", JSON.stringify(budgets));
  }, [budgets]);
>>>>>>> Stashed changes

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
            {/* Sidebar */}
            <Sidebar/>

<<<<<<< Updated upstream
            <main style={{ flex: 1, padding: '1.5rem' }}>
                Add Stuff Here
            </main>
=======
    if (isEditMode) {
      const updatedBudgets = [...budgets];
      updatedBudgets[selectedBudgetIndex] = {
        name: newBudgetName,
        amount: Number(newBudgetAllocation),
        spent: 0,
        icon: selectedIcon,
        items: 0,  // Initialize the items to 0
      };
      setBudgets(updatedBudgets);
    } else {
      setBudgets([  // Create a new budget
        ...budgets,
        { name: newBudgetName, amount: Number(newBudgetAllocation), spent: 0, icon: selectedIcon, items: 0 },  // Initialize items to 0
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

  const handleDeleteBudget = (index) => {
    const updatedBudgets = budgets.filter((_, i) => i !== index);
    setBudgets(updatedBudgets);
  };

  const handleBudgetClick = (budget) => {
    navigate("/expenses", { state: { budget } });
  };

  const iconOptions = [
    "🛍️", "🏠", "🍔", "✈️", "💪", "🎮", "📚", "💰",
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
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
            const totalSpent = budget.spent || 0;
            const remaining = budget.amount - totalSpent;
            return (
              <div
                key={index}
                onClick={() => handleBudgetClick(budget)}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "1rem",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ fontSize: "2rem", marginRight: "0.75rem" }}>{budget.icon}</div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: "600", color: "#333" }}>
                        {budget.name}
                      </h3>
                      <p style={{ margin: 0, fontSize: "0.875rem", color: "#666" }}>
                        {budget.items} Items
                      </p>
                    </div>
                  </div>
                  <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "600", color: "#333" }}>
                    ${budget.amount}
                  </h2>
                </div>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.875rem",
                    color: "#666",
                  }}
                >
                  <span>${totalSpent} Spent</span>
                  <span style={{ color: remaining < 0 ? "red" : "green" }}>${remaining} Remaining</span>
                </p>
                <div
                  style={{
                    height: "8px",
                    width: "100%",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${(totalSpent / budget.amount) * 100}%`,
                      backgroundColor: "#7a5cfa",
                      borderRadius: "4px",
                    }}
                  ></div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem", marginTop: "1rem" }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditBudget(index);
                    }}
                    style={{ background: "none", border: "none", color: "#7a5cfa", cursor: "pointer" }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteBudget(index);
                    }}
                    style={{ background: "none", border: "none", color: "red", cursor: "pointer" }}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            );
          })}
>>>>>>> Stashed changes
        </div>
    )
}

<<<<<<< Updated upstream
export default Budgets;
=======
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
            <TextField
              fullWidth
              label="Budget Name"
              variant="outlined"
              value={newBudgetName}
              onChange={(e) => setNewBudgetName(e.target.value)}
              style={{ marginBottom: "1rem" }}
            />
            <TextField
              fullWidth
              label="Budget Allocation"
              variant="outlined"
              type="number"
              value={newBudgetAllocation}
              onChange={(e) => setNewBudgetAllocation(e.target.value)}
              style={{ marginBottom: "1rem" }}
            />
            <div style={{ display: "flex", gap: "1rem", overflowX: "auto", marginBottom: "1rem" }}>
              {iconOptions.map((icon, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedIcon(icon)}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40px",
                    height: "40px",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    border: selectedIcon === icon ? "2px solid #7a5cfa" : "none",
                    borderRadius: "50%",
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleAddOrEditBudget}
            >
              {isEditMode ? "Update Budget" : "Create Budget"}
            </Button>
            <Button
              fullWidth
              style={{ marginTop: "1rem" }}
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Budgets;
>>>>>>> Stashed changes
