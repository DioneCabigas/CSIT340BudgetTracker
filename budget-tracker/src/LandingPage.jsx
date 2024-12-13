import React from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './css/LandingPage.css';
import budgetsImage from './assets/budgets.jpg';
import dashboardImage from './assets/dashboard.jpg';
import expenseImage from './assets/expense.jpg';

function LandingPage() {
  return (
    <div className="landing-page">
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'white',
          borderBottom: '1px solid #ddd',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <img src="BudgetTracker-logo.jpg" alt="Logo" className="logo" />
          <div className="appbar-buttons">
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'white',
                  color: '#2f27ce',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  boxShadow: 'none',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#f9f9f9',
                  },
                }}
              >
                Dashboard
              </Button>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#2f27ce',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  boxShadow: 'none',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#1f1b9c',
                  },
                }}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      <div className="body-content">
        <Typography variant="h2" className="main-text">
          Manage Your Expense <br />
          <Typography
            variant="h2"
            sx={{ color: '#2f27ce' }}
          >
            Control Your Money
          </Typography>
        </Typography>

        <Typography variant="h5" className="sub-text">
          Start creating your budget and save a ton of money
        </Typography>

        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#2f27ce',
              color: 'white',
              fontWeight: 'bold',
              padding: '12px 30px',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#1f1b9c',
              },
              boxShadow: 'none',
              marginTop: '30px',
              textTransform: 'none',
            }}
          >
            Get Started
          </Button>
        </Link>
      </div>


      <div className="features-section">
        <Typography
          variant="h4"
          className="features-title"
          gutterBottom
          sx={{ marginBottom: '40px' }}
        >
          Key Features
        </Typography>

        <div className="feature">
          <Typography variant="h5" className="feature-title" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="body1" className="feature-text" gutterBottom>
            Get an overview of your financial situation at a glance. View your
            budget vs. expenses in dynamic charts for quick insights.
          </Typography>
          <img
            src={dashboardImage}
            alt="Dashboard"
            className="feature-image"
          />
        </div>

        <hr className="feature-divider" />

        <div className="feature">
          <Typography variant="h5" className="feature-title" gutterBottom>
            Budgets
          </Typography>
          <Typography variant="body1" className="feature-text" gutterBottom>
            Easily manage and allocate budgets to different categories. Track
            your expenses in real-time and make informed financial decisions.
          </Typography>
          <img src={budgetsImage} alt="Budgets" className="feature-image" />
        </div>

        <hr className="feature-divider" />

        <div className="feature">
          <Typography variant="h5" className="feature-title" gutterBottom>
            Expenses
          </Typography>
          <Typography variant="body1" className="feature-text" gutterBottom>
            Track your daily, weekly, and monthly expenses to ensure you stay
            within your budget limits. Set reminders and stay on top of your
            financial goals.
          </Typography>
          <img src={expenseImage} alt="Expenses" className="feature-image" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
