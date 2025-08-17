import * as React from 'react';
import { Avatar, Button, CssBaseline, TextField, Box, Grid, Paper, Snackbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { AuthContext } from '../contexts/AuthContext';

const theme = createTheme({
  palette: {
    primary: { main: '#4B2E2E' }, // Espresso brown
    secondary: { main: '#C69C72' }, // Soft caramel
  },
  typography: { fontFamily: 'Poppins, sans-serif' },
});

export default function Authentication() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [formState, setFormState] = React.useState(0); // 0 = Login, 1 = Register
  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  const handleAuth = async () => {
    try {
      if (formState === 0) {
        await handleLogin(username, password);
      } else {
        const result = await handleRegister(name, username, password);
        setMessage(result);
        setOpen(true);
        setFormState(0);
        setUsername(""); setPassword(""); setName(""); setError("");
      }
    } catch (err) {
      const msg = err.response?.data?.message || "An error occurred";
      setError(msg);
    }
  };

  return (
    <Box
    sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/Cafe.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px)", // adjust blur strength
          zIndex: -1,
        },
      }}
      >
    <ThemeProvider theme={theme}>
      
        <CssBaseline />
        <Grid
          container
          sx={{
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 5,
              borderRadius: 3,
              maxWidth: 400,
              width: '90%',
              textAlign: 'center',
              backgroundImage: 'url(/images/coffee-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Avatar sx={{ m: 'auto', bgcolor: 'primary.main' }}>
              <CoffeeIcon />
            </Avatar>
            <h2 style={{ color: '#4B2E2E', fontFamily: 'Poppins, sans-serif' }}>
              {formState === 0 ? "Welcome Back" : "Join OneCoffee"}
            </h2>

            <Box sx={{ mb: 2 }}>
              <Button
                variant={formState === 0 ? "contained" : "outlined"}
                onClick={() => setFormState(0)}
                sx={{ mr: 1, borderRadius: '20px', background: formState === 0 ? 'linear-gradient(90deg, #4B2E2E, #C69C72)' : '', color: formState === 0 ? '#FFF8F0' : '#4B2E2E' }}
              >Sign In</Button>
              <Button
                variant={formState === 1 ? "contained" : "outlined"}
                onClick={() => setFormState(1)}
                sx={{ borderRadius: '20px', background: formState === 1 ? 'linear-gradient(90deg, #4B2E2E, #C69C72)' : '', color: formState === 1 ? '#FFF8F0' : '#4B2E2E' }}
              >Sign Up</Button>
            </Box>

            <Box component="form" noValidate sx={{ mt: 1 }}>
              {formState === 1 && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p style={{ color: 'red' }}>{error}</p>}

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 3, mb: 2,
                  borderRadius: '20px',
                  background: 'linear-gradient(90deg, #4B2E2E, #C69C72)',
                  color: '#FFF8F0',
                }}
                onClick={handleAuth}
              >
                {formState === 0 ? "Login" : "Register"}
              </Button>
            </Box>
          </Paper>

          <Snackbar
            open={open}
            autoHideDuration={4000}
            message={message}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          />
        </Grid>
    
    </ThemeProvider>
    </Box>
  );
}
