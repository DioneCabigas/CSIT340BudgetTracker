import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { ArrowUpward, ArrowDownward, AccountBalanceWallet } from '@mui/icons-material';
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
            Here's what's happening with your money. Let's manage your expense.
          </p>
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card style={{ backgroundColor: '#d4f1d1', padding: '1.5rem', textAlign: 'center', borderRadius: '8px' }}>
              <CardContent>
                <ArrowUpward style={{ color: '#4CAF50', fontSize: '2rem' }} />
                <Typography variant="h6">Total Budget</Typography>
                <Typography variant="h5" style={{ marginTop: '0.5rem' }}>$0.00</Typography>
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
                <Typography variant="h5" style={{ marginTop: '0.5rem' }}>5</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: '2rem' }}>
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
            <Card style={{ padding: '1.5rem' }}>
              <Typography variant="h6" style={{ marginBottom: '1rem' }}>Latest Budgets</Typography>
              <div>
                {/* Latest Budget Card 1 */}
                <Card
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
                      <div style={{ fontSize: '2rem', marginRight: '0.75rem' }}>🛍️</div>
                      <div>
                        <Typography variant="h6" style={{ margin: 0, fontWeight: '600', color: '#333' }}>
                          Shopping
                        </Typography>
                      </div>
                    </div>
                    <Typography variant="h5" style={{ margin: 0, color: '#333' }}>$2300</Typography>
                  </div>
                </Card>

                {/* Latest Budget Card 2 */}
                <Card
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
                      <div style={{ fontSize: '2rem', marginRight: '0.75rem' }}>🏠</div>
                      <div>
                        <Typography variant="h6" style={{ margin: 0, fontWeight: '600', color: '#333' }}>
                          Home Decor
                        </Typography>
                      </div>
                    </div>
                    <Typography variant="h5" style={{ margin: 0, color: '#333' }}>$3800</Typography>
                  </div>
                </Card>

                {/* Latest Budget Card 3 */}
                <Card
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
                      <div style={{ fontSize: '2rem', marginRight: '0.75rem' }}>🍽️</div>
                      <div>
                        <Typography variant="h6" style={{ margin: 0, fontWeight: '600', color: '#333' }}>
                          Food
                        </Typography>
                      </div>
                    </div>
                    <Typography variant="h5" style={{ margin: 0, color: '#333' }}>$1500</Typography>
                  </div>
                </Card>
              </div>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Dashboard;