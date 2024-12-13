import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { ArrowUpward, ArrowDownward, AccountBalanceWallet } from '@mui/icons-material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Sidebar from './Sidebar';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const fetchBudgets = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/budget');
      const data = await response.json();
      setBudgets(data);
    } catch (error) {
      console.error('Error fetching budgets:', error);
    }
  };

  const fetchExpenses = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/expense');
      const data = await response.json();
      
      // Filter expenses by userId (assuming userId is 1)
      const filteredExpenses = Array.isArray(data) ? data.filter(expense => expense.userId === 1) : [];
      setExpenses(filteredExpenses);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  useEffect(() => {
    fetchBudgets();
    fetchExpenses();
  }, []);

  // Calculate Total Budget
  const totalBudget = budgets.reduce((total, budget) => total + budget.budgetAmountAllocated, 0);

  // Prepare data for the chart dynamically based on budgets and expenses
  // Prepare data for the chart dynamically based on budgets and expenses
const chartData = {
  labels: budgets.map(budget => budget.budgetName),
  datasets: [
    {
      label: 'Allocated Budget',
      data: budgets.map(budget => budget.budgetAmountAllocated),
      backgroundColor: 'green',
    },
    {
      label: 'Expenses',
      data: budgets.map(budget => {
        // Get expenses related to this budget
        const budgetExpenses = expenses.filter(expense => expense.budgetId === budget.id);
        // Calculate total expenses for this budget
        return budgetExpenses.reduce((sum, expense) => sum + expense.amount, 0);
      }),
      backgroundColor: 'red',
    },
  ],
};


  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '2rem' }}>
        <div
          style={{
            backgroundColor: '#fff',
            padding: '1.5rem',
            marginBottom: '1.5rem',
            borderRadius: '8px',
            border: '1px solid #ddd',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h1 style={{ margin: 0 }}>Hi, User!</h1>
          <p style={{ margin: '0.5rem 0' }}>
            Here's what's happening with your money. Let's manage your expenses.
          </p>
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card style={{ backgroundColor: '#d4f1d1', padding: '1.5rem', textAlign: 'center', borderRadius: '8px' }}>
              <CardContent>
                <ArrowUpward style={{ color: '#4CAF50', fontSize: '2rem' }} />
                <Typography variant="h6">Total Budget</Typography>
                <Typography variant="h5" style={{ marginTop: '0.5rem' }}>${totalBudget.toFixed(2)}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={{ backgroundColor: '#f9e1e1', padding: '1.5rem', textAlign: 'center', borderRadius: '8px' }}>
              <CardContent>
                <ArrowDownward style={{ color: '#f44336', fontSize: '2rem' }} />
                <Typography variant="h6">Total Spend</Typography>
                <Typography variant="h5" style={{ marginTop: '0.5rem' }}>$230.32</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={{ backgroundColor: '#e0e1ff', padding: '1.5rem', textAlign: 'center', borderRadius: '8px' }}>
              <CardContent>
                <AccountBalanceWallet style={{ color: '#7e57c2', fontSize: '2rem' }} />
                <Typography variant="h6">No. of Budgets</Typography>
                <Typography variant="h5" style={{ marginTop: '0.5rem' }}>{budgets.length}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: '2rem' }}>
          <Grid item xs={12} md={7}>
            <Card style={{ height: '300px' }}>
              <CardContent>
                <Typography variant="h6" style={{ marginBottom: '1rem' }}>Expenses vs Budget Allocation</Typography>
                <div style={{ width: '100%', height: '200px' }}>
                  <Bar data={chartData} options={{ maintainAspectRatio: false }} />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card style={{ padding: '1.5rem' }}>
              <Typography variant="h6" style={{ marginBottom: '1rem' }}>Latest Budgets</Typography>
              <div>
                {budgets.length > 0 ? (
                  budgets.slice(0, 3).map((budget, index) => (
                    <Card
                      key={index}
                      style={{
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        padding: '1rem',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        marginBottom: '1rem',
                        height: '100%',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <div style={{ fontSize: '2rem', marginRight: '0.75rem' }}>{budget.icon}</div>
                          <div>
                            <Typography variant="h6" style={{ margin: 0, fontWeight: '600', color: '#333' }}>
                              {budget.budgetName}
                            </Typography>
                          </div>
                        </div>
                        <Typography variant="h5" style={{ margin: 0, color: '#333' }}>${budget.budgetAmountAllocated}</Typography>
                      </div>
                    </Card>
                  ))
                ) : (
                  <p>No budgets created yet.</p>
                )}
              </div>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Dashboard;
