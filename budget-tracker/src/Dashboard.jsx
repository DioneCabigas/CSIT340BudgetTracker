import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import Sidebar from "./Sidebar";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      { label: "Utilities", data: [500, 700, 400, 600, 800], backgroundColor: "green" },
      { label: "Rent", data: [300, 400, 500, 300, 400], backgroundColor: "blue" },
      { label: "Food", data: [200, 300, 200, 300, 200], backgroundColor: "red" },
      { label: "Gasoline", data: [100, 150, 100, 150, 100], backgroundColor: "orange" },
    ],
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Sidebar */}
      <Sidebar />

      <main style={{ flex: 1, padding: "1rem" }}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "1.5rem",
            borderRadius: "8px",
            marginBottom: "1rem",
          }}
        >
          <Typography variant="h4">Hi, User!</Typography>
          <Typography variant="body1" style={{ marginTop: "0.5rem" }}>
            Here's what happening with your money. Let's manage your expense.
          </Typography>
        </div>

        {/* Statistics | To be changed */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card style={{ textAlign: "center", height: "120px" }}>
              <CardContent>
                <Typography variant="subtitle1">Total Budget</Typography>
                <Typography variant="h5" style={{ marginTop: "0.5rem" }}>$15100</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card style={{ textAlign: "center", height: "120px" }}>
              <CardContent>
                <Typography variant="subtitle1">Total Spend</Typography>
                <Typography variant="h5" style={{ marginTop: "0.5rem" }}>$4830</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card style={{ textAlign: "center", height: "120px" }}>
              <CardContent>
                <Typography variant="subtitle1">No. of Budgets</Typography>
                <Typography variant="h5" style={{ marginTop: "0.5rem" }}>5</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Chart | Update once thers data */}
        <Grid container spacing={2} style={{ marginTop: "1rem" }}>
          <Grid item xs={12} md={7}>
            <Card style={{ height: "300px" }}>
              <CardContent>
                <Typography variant="h6" style={{ marginBottom: "1rem" }}>Expenses by Month</Typography>
                <div style={{ height: "200px" }}>
                  <Bar data={data} options={{ maintainAspectRatio: false }} />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card style={{ height: "300px", overflowY: "auto" }}>
              <CardContent>
                <Typography variant="h6">Latest Budgets</Typography>
                <div style={{ marginTop: "1rem" }}>
                  <Typography>Shopping</Typography>
                  <Typography color="textSecondary">$2300</Typography>
                  <Typography>Home Decor</Typography>
                  <Typography color="textSecondary">$3800</Typography>
                  <Typography>Garden</Typography>
                  <Typography color="textSecondary">$1500</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Latest Expenses */}
        <Grid container spacing={2} style={{ marginTop: "1rem" }}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Latest Expenses</Typography>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                  <Typography>Name</Typography>
                  <Typography>Amount</Typography>
                  <Typography>Date</Typography>
                  <Typography>Action</Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
                  <Typography>Groceries</Typography>
                  <Typography>$120</Typography>
                  <Typography>10/05/2023</Typography>
                  <Typography>View</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Dashboard;
