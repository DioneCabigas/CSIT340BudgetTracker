import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Budgets from "./Budgets";
import Expenses from "./Expenses";
import Upgrades from "./Upgrades";
import Accounts from "./Accounts";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/upgrades" element={<Upgrades />} />
        <Route path="/account" element={<Accounts />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
