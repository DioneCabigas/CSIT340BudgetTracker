// src/App.js
import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Card, CardContent, Typography, Grid } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const App = () => {
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
      <div style={{ width: '220px', backgroundColor: '#f5f5f5', padding: '1rem' }}>
        <Typography variant="h5" style={{ marginBottom: '1rem', fontWeight: 'bold', textAlign: 'center' }}>LOGO</Typography>
        <List>
          <ListItem button>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><AccountBalanceWalletIcon /></ListItemIcon>
            <ListItemText primary="Budgets" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
            <ListItemText primary="Expenses" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><UpgradeIcon /></ListItemIcon>
            <ListItemText primary="Upgrade" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
        </List>
      </div>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '1.5rem' }}>
        {/* Header */}
        <div style={{ backgroundColor: '#fff', padding: '1.5rem', marginBottom: '1.5rem', textAlign: 'center', borderRadius: '8px' }}>
          <h1 style={{ margin: 0 }}>Hi, User!</h1>
          <p style={{ margin: '0.5rem 0' }}>Here's what happening with your money. Let's manage your expense.</p>
        </div>

        {/* Dashboard Content */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card style={{ height: '120px', textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h6">Total Budget</Typography>
                <Typography variant="h5" style={{ marginTop: '0.5rem' }}>$15100</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card style={{ height: '120px', textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h6">Total Spend</Typography>
                <Typography variant="h5" style={{ marginTop: '0.5rem' }}>$4830</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card style={{ height: '120px', textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h6">No. of Budgets</Typography>
                <Typography variant="h5" style={{ marginTop: '0.5rem' }}>5</Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <Card style={{ height: '300px' }}>
              <CardContent>
                <Typography variant="h6" style={{ marginBottom: '1rem' }}>Expenses by Month</Typography>
                <div style={{ width: '100%', height: '200px' }}>
                  <Bar data={data} options={{ maintainAspectRatio: false }} />
                </div>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={5}>
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
          </Grid>

          <Grid item xs={12}>
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
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default App;
