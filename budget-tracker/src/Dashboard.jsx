import React from 'react';
import { Card, CardContent, Typography, Grid2 } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Sidebar from './Sidebar';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Utilities',
        data: [500, 700, 400, 600, 800],
        backgroundColor: 'green',
      },
      {
        label: 'Rent',
        data: [300, 400, 500, 300, 400],
        backgroundColor: 'blue',
      },
      {
        label: 'Food',
        data: [200, 300, 200, 300, 200],
        backgroundColor: 'red',
      },
      {
        label: 'Gasoline',
        data: [100, 150, 100, 150, 100],
        backgroundColor: 'orange',
      },
    ],
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '1.5rem' }}>
        {/* Header */}
        <div style={{ backgroundColor: '#fff', padding: '1.5rem', marginBottom: '1.5rem', borderRadius: '8px', border: '1px solid' }}>
          <h1 style={{ margin: 0 }}>Hi, User!</h1>
          <p style={{ margin: '0.5rem 0' }}>Here's what happening with your money. Let's manage your expense.</p>
        </div>

        {/* Dashboard Content */}
        <Grid2 container spacing={2}>
          <Grid2 xs={12} sm={4}>
            <Card style={{ height: '120px', textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h6">Total Budget</Typography>
                <Typography variant="h5" style={{ marginTop: '0.5rem' }}>$15100</Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <Card style={{ height: '120px', textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h6">Total Spend</Typography>
                <Typography variant="h5" style={{ marginTop: '0.5rem' }}>$4830</Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <Card style={{ height: '120px', textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h6">No. of Budgets</Typography>
                <Typography variant="h5" style={{ marginTop: '0.5rem' }}>5</Typography>
              </CardContent>
            </Card>
          </Grid2>
          
          <Grid2 xs={12} md={7}>
            <Card style={{ height: '300px' }}>
              <CardContent>
                <Typography variant="h6" style={{ marginBottom: '1rem' }}>Expenses by Month</Typography>
                <div style={{ width: '100%', height: '200px' }}>
                  <Bar data={data} options={{ maintainAspectRatio: false }} />
                </div>
              </CardContent>
            </Card>
          </Grid2>
          
          <Grid2 xs={12} md={5}>
            <Card style={{ height: '300px', overflow: 'auto' }}>
              <CardContent>
                <Typography variant="h6">Latest Budgets</Typography>
                {/* Mock Data for Budget items */}
                <div style={{ marginTop: '1rem' }}>
                  <Typography>Shopping</Typography>
                  <Typography color="textSecondary">$2300</Typography>
                  <Typography>Home Decor</Typography>
                  <Typography color="textSecondary">$3800</Typography>
                  <Typography>Garden</Typography>
                  <Typography color="textSecondary">$1500</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Latest Expenses</Typography>
                {/* Table-like structure for latest expenses */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', padding: '0.5rem 0' }}>
                  <Typography>Name</Typography>
                  <Typography>Amount</Typography>
                  <Typography>Date</Typography>
                  <Typography>Action</Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                  <Typography>Groceries</Typography>
                  <Typography>$120</Typography>
                  <Typography>10/05/2023</Typography>
                  <Typography>View</Typography>
                </div>
                {/* Additional rows for mock expenses can be added here */}
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </main>
    </div>
  );
};

export default Dashboard;