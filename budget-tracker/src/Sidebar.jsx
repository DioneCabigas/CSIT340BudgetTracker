import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div style={{ width: '300px', backgroundColor: '#f5f5f5', padding: '1rem' }}>
            <Typography variant="h5" style={{ marginBottom: '1rem', fontWeight: 'bold', textAlign: 'center' }}>LOGO</Typography>
            <List>
            <ListItem button component={Link} to={'/dashboard'}>
                <ListItemIcon><DashboardIcon fontSize='large' /></ListItemIcon>
                <ListItemText 
                primary="Dashboard"
                primaryTypographyProps={{ fontSize: '1.2rem' }} />
            </ListItem>
            <ListItem button component={Link} to={'/budgets'}>
                <ListItemIcon><AccountBalanceWalletIcon fontSize='large' /></ListItemIcon>
                <ListItemText 
                primary="Budgets"
                primaryTypographyProps={{ fontSize: '1.2rem' }} />
            </ListItem>
            <ListItem button component={Link} to={'/expenses'}>
                <ListItemIcon><AttachMoneyIcon fontSize='large' /></ListItemIcon>
                <ListItemText 
                primary="Expenses"
                primaryTypographyProps={{ fontSize: '1.2rem' }} />
            </ListItem>
            <ListItem button component={Link} to={'/accounts'}>
                <ListItemIcon><AccountCircleIcon fontSize='large' /></ListItemIcon>
                <ListItemText 
                primary="Account"
                primaryTypographyProps={{ fontSize: '1.2rem' }} />
            </ListItem>
            </List>
        </div>
    )
}

export default Sidebar;