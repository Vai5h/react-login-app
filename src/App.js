import React, { useState } from 'react';
import Login from './login';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from '@mui/material';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to handle dialog visibility

  // Function to handle login, set the logged-in user's name, and show the dialog
  const handleLogin = (username) => {
    setLoggedInUser(username); // Set the logged-in username
    setIsDialogOpen(true); // Open the dialog after login
  };

  // Function to close the dialog and return to login page
  const handleClose = () => {
    setIsDialogOpen(false); // Close the dialog when the button is clicked
    setLoggedInUser(''); // Clear the logged-in username to return to login
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(https://source.unsplash.com/random)', // Adding a background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {!loggedInUser && <Login onLogin={handleLogin} />} {/* Show login form if not logged in */}

      {/* Dialog to show welcome message */}
      <Dialog open={isDialogOpen} onClose={handleClose}>
        <DialogTitle>Welcome</DialogTitle>
        <DialogContent>
          <h2>Welcome, {loggedInUser}!</h2> {/* Show the logged-in username in the dialog */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary" sx={{ mt: 2 }}>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default App;
