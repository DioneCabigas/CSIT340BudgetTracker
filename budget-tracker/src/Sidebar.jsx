import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Button } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const Sidebar = () => {
    const handleLogout = () => {
        // Add your logout logic here
        console.log("Logging out...");
    };

    return (
        <div style={{ width: '300px', backgroundColor: '#2f27ce', padding: '1.5rem', color: '#fff', height: '100vh' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <img src="/BudgetTracker-logo.jpg" alt="Logo" style={{ width: '100%', maxWidth: '275px' }} />
            </div>
            <List style={{ padding: 0 }}>
                <ListItem button component={Link} to={'/dashboard'} style={{ color: '#fff', padding: '15px 0' }}>
                    <ListItemIcon><DashboardIcon fontSize='large' style={{ color: '#fff', fontSize: '2rem' }} /></ListItemIcon>
                    <ListItemText 
                        primary="Dashboard"
                        primaryTypographyProps={{ fontSize: '1.4rem', color: '#fff' }} 
                    />
                </ListItem>
                <ListItem button component={Link} to={'/budgets'} style={{ color: '#fff', padding: '15px 0' }}>
                    <ListItemIcon><AccountBalanceWalletIcon fontSize='large' style={{ color: '#fff', fontSize: '2rem' }} /></ListItemIcon>
                    <ListItemText 
                        primary="Budgets"
                        primaryTypographyProps={{ fontSize: '1.4rem', color: '#fff' }} 
                    />
                </ListItem>
                <ListItem button component={Link} to={'/expenses'} style={{ color: '#fff', padding: '15px 0' }}>
                    <ListItemIcon><AttachMoneyIcon fontSize='large' style={{ color: '#fff', fontSize: '2rem' }} /></ListItemIcon>
                    <ListItemText 
                        primary="Expenses"
                        primaryTypographyProps={{ fontSize: '1.4rem', color: '#fff' }} 
                    />
                </ListItem>
                <ListItem button component={Link} to={'/userprofile'} style={{ color: '#fff', padding: '15px 0' }}>
                    <ListItemIcon><AccountCircleIcon fontSize='large' style={{ color: '#fff', fontSize: '2rem' }} /></ListItemIcon>
                    <ListItemText 
                        primary="Account"
                        primaryTypographyProps={{ fontSize: '1.4rem', color: '#fff' }} 
                    />
                </ListItem>
            </List>
           
        </div>
    )
}

export default Sidebar;
