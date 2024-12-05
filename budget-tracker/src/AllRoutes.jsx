import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Budgets from "./Budgets";
import Expenses from "./Expenses";
import Accounts from "./Accounts";
import Login from "./login";
import Register from "./register";
import LandingPage from "./LandingPage";
import UserProfile from "./userProfile";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<LandingPage/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/account" element={<Accounts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/userprofile" element={<UserProfile/>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
