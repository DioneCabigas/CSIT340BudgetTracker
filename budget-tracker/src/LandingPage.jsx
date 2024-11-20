import React from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './css/LandingPage.css';


function LandingPage() {
  return (
    <div className="landing-page">
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'white',
          borderBottom: '1px solid black',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <img src="logo.png" alt="Logo" className="logo" />
          <div className="appbar-buttons">
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                  },
                  boxShadow: 'none',
                  textTransform: 'none',
                }}
              >
                Dashboard
              </Button>
            </Link>
            <Button
      variant="contained"
      component={Link}
      to="/Login"
      sx={{
        backgroundColor: '#4747e9',
        color: 'white',
        fontWeight: 'bold',
        padding: '10px 20px',
        borderRadius: '4px',
        '&:hover': {
          backgroundColor: '#3a3ae0',
        },
        boxShadow: 'none',
        textTransform: 'none',
      }}
    >
      Get Started
    </Button>
          </div>
        </Toolbar>
      </AppBar>

      <div className="body-content">
        <Typography variant="h2" className="main-text">
          Manage Your Expense <br />
          <Typography
            variant="h2"
            sx={{ color: '#4747e9' }}
          >
            Control Your Money
          </Typography>
        </Typography>

        <Typography variant="h5" className="sub-text">
          Start creating your budget and save a ton of money
        </Typography>

        <Button
         variant="contained"
         component={Link}
         to="/Login"
         sx={{
            backgroundColor: '#4747e9',
            color: 'white',
            fontWeight: 'bold',
            padding: '12px 30px',
            borderRadius: '4px',
            '&:hover': {
              backgroundColor: '#3a3ae0',
            },
            boxShadow: 'none',
            marginTop: '30px',
            textTransform: 'none',
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
