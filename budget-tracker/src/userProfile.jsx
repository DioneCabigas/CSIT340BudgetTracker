import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Avatar, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Sidebar from './Sidebar';  // Make sure to import your Sidebar component

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  marginBottom: theme.spacing(2),
}));

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Sidebar />  {/* Include Sidebar here */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <Container maxWidth="sm" sx={{ mt: 5 }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <StyledAvatar src={profileImage} alt={user.name}>
              {!profileImage && user.name.charAt(0)}
            </StyledAvatar>
            
            <Button
              variant="contained"
              component="label"
              sx={{ mb: 3 }}
            >
              Upload Profile Picture
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageUpload}
              />
            </Button>
            
            <Typography variant="h5" gutterBottom>
              {user.name}
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  value={user.name}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  value={user.email}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone"
                  variant="outlined"
                  value={user.phone}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  variant="outlined"
                  value={user.address}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>
            
            <Button variant="contained" color="primary" sx={{ mt: 3 }}>
              Edit Profile
            </Button>
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default UserProfile;
