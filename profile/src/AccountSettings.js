import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Avatar,
  Paper
} from '@mui/material';
import profileImage from './image/profile.jpg'; // Default profile image

function AccountSettings() {
  const [email, setEmail] = useState('earlowen.calzada@cit.edu');
  const [firstName, setFirstName] = useState('Earl Owen');
  const [lastName, setLastName] = useState('Calzada');
  const [website, setWebsite] = useState('https://www.figma.com/design/Personal-Budget-Tracker');
  const [facebook, setFacebook] = useState('https://www.facebook.com/earlowencalzada');
  const [twitter, setTwitter] = useState('https://twitter.com/earlowencalzada');
  const [profilePic, setProfilePic] = useState(profileImage); // State for the profile picture

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); // Update state with base64 image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, firstName, lastName, website, facebook, twitter });
  };

  return (
    <Container maxWidth="sm" style={{ padding: '2rem' }}>
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <Avatar
          alt="User Profile"
          src={profilePic} // Display the selected image or default image
          style={{ width: 100, height: 100, margin: 'auto' }}
        />
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            style={{ display: 'block', margin: 'auto' }}
          />
        </div>
        <Typography variant="h5" align="center" gutterBottom>
          Account Settings
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Website"
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Facebook"
                type="url"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Twitter"
                type="url"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '1rem' }}
          >
            Save Changes
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default AccountSettings;
