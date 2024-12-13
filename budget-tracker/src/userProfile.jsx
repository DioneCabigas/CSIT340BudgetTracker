import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Avatar, Box, Grid, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Sidebar from './Sidebar'; // Make sure this component is correctly imported
import axios from 'axios';

// Styled Avatar component
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  marginBottom: theme.spacing(2),
}));

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [openChangePassword, setOpenChangePassword] = useState(false); // To handle the change password dialog state
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Fetch user data on component mount
  useEffect(() => {
    axios.get('http://localhost:8080/api/user/1')
      .then(response => {
        setUser(response.data);
        setEditedUser({ ...response.data });
        if (response.data.profilePicture) {
          setProfileImage(response.data.profilePicture);
        }
      })
      .catch(error => {
        console.error("There was an error fetching the user data:", error);
      });
  }, []);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // Handle changes to the editable fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  // Handle form submission (Save the edited profile)
  const handleSubmit = () => {
    // Update the user profile in the backend
    axios.put('http://localhost:8080/api/user/1', editedUser)
      .then(response => {
        setUser(response.data);  // Update user state with the saved data
        setIsEditing(false);      // Switch back to view mode
      })
      .catch(error => {
        console.error("Error updating profile:", error);
      });
  };

  // Logout function to redirect to login page
  const handleLogout = () => {
    // Display a small delay to simulate logging out
    setTimeout(() => {
      navigate('/login'); // Redirect to login page after delay
    }, 1000); // 1-second delay
  };
  

  // Open the Change Password dialog
  const handleOpenChangePassword = () => {
    setOpenChangePassword(true);
  };

  // Close the Change Password dialog
  const handleCloseChangePassword = () => {
    setOpenChangePassword(false);
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleChangePasswordSubmit = () => {
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password don't match.");
      return;
    }
  
    const passwordData = {
      userId: user.userId,  // Send the userId
      oldPassword,
      newPassword,
    };
  
    // Make API call to change the password
    axios.put('http://localhost:8080/api/user/change-password', passwordData)
      .then(response => {
        handleCloseChangePassword(); // Close the dialog after success
      })
      .catch(error => {
        console.error("Error changing password:", error);
        alert('Failed to change password');
      });
  };
  

  // Check if user data is available, and if not, display loading text
  if (!user) {
    return <p>Loading...</p>; // Show loading text until user data is fetched
  }

  // If user data is available, render the profile page
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main style={{ flex: 1, padding: '1.5rem' }}>
        <Container maxWidth="sm" sx={{ mt: 5 }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* Profile Image */}
            <StyledAvatar src={profileImage} alt={user.username}>
              {!profileImage && user.username.charAt(0)}
            </StyledAvatar>

            {/* Upload Profile Image Button */}
            <Button variant="contained" component="label" sx={{ mb: 3 }}>
              Upload Profile Picture
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageUpload}
              />
            </Button>

            {/* User Name */}
            <Typography variant="h5" gutterBottom>
              {user.username}
            </Typography>

            {/* Editable Profile Fields */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  value={isEditing ? editedUser.username : user.username}
                  name="username"
                  onChange={handleInputChange}
                  InputProps={{ readOnly: !isEditing }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  value={isEditing ? editedUser.email : user.email}
                  name="email"
                  onChange={handleInputChange}
                  InputProps={{ readOnly: !isEditing }}
                />
              </Grid>
            </Grid>

            {/* Toggle Edit Mode */}
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
              onClick={() => {
                if (isEditing) {
                  handleSubmit(); // Save profile if editing
                } else {
                  setIsEditing(true); // Enable editing mode
                }
              }}
            >
              {isEditing ? 'Save Profile' : 'Edit Profile'}
            </Button>

            {/* Change Password Button (Purple color restored) */}
            <Button
              variant="contained"
              color="primary" // Purple color
              sx={{ mt: 3 }}
              onClick={handleOpenChangePassword}
            >
              Change Password
            </Button>

            {/* Logout Button (Red color) */}
            <Button
              variant="contained"
              color="error"
              sx={{ mt: 3 }}
              onClick={handleLogout}
            >
              Logout
            </Button>

            {/* Change Password Dialog */}
            <Dialog open={openChangePassword} onClose={handleCloseChangePassword}>
              <DialogTitle>Change Password</DialogTitle>
              <DialogContent>
                <TextField
                  fullWidth
                  label="Old Password"
                  type="password"
                  variant="outlined"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="New Password"
                  type="password"
                  variant="outlined"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Confirm New Password"
                  type="password"
                  variant="outlined"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  sx={{ mb: 2 }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseChangePassword} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleChangePasswordSubmit} color="primary">
                  Change Password
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default UserProfile;
