import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper, Checkbox, FormControlLabel, Link, Avatar, Snackbar } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MuiAlert from '@mui/material/Alert';
import './login.css';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [open, setOpen] = useState(false);
  const [userDisplayName, setUserDisplayName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      const name = username.split('@')[0]; // Extract name without @gmail.com
      setUserDisplayName(name);
      setOpen(true); // Open Snackbar to show welcome message
      onLogin(name); // Pass the username to the onLogin handler
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={8} sx={{ padding: 4, borderRadius: 4, backdropFilter: 'blur(8px)' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 2,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5" gutterBottom>
            Welcome Back
          </Typography>
        </Box>
        
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                color="primary"
              />
            }
            label="Remember Me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              mt: 3,
              mb: 2,
              padding: '0.75rem',
              borderRadius: '30px',
              bgcolor: 'rgba(0, 98, 137, 0.8)', // Peacock Blue
              '&:hover': {
                bgcolor: 'rgba(0, 150, 136, 0.8)', // Peacock Green on hover
              },
            }}
          >
            Login
          </Button>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link href="#" variant="body2" sx={{ textDecoration: 'none' }}>
              Forgot password?
            </Link>
            <Link href="#" variant="body2" sx={{ textDecoration: 'none' }}>
              Don't have an account? Sign Up
            </Link>
          </Box>
        </form>
      </Paper>

      {/* Snackbar for welcome message */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Welcome, {userDisplayName}!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
