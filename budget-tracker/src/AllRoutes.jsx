import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Budgets from "./Budgets";
import Expenses from "./Expenses";
import Upgrades from "./Upgrades";
import Accounts from "./Accounts";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Register from "./Register";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/upgrades" element={<Upgrades />} />
        <Route path="/accounts" element={<Accounts/>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
