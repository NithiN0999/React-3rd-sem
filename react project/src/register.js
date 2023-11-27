// Register.js

import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister=(event)=>
   {
       event.preventDefault();
       axios.
       post("http://localhost:3001/users",{"fname":firstName,"lname":lastName,"email":email,"password":password})
       .then((res)=>
       {
           console.log(res.data);
       })
       .catch((error)=>
       {
           console.log("Error: "+error);
       })
   }

  const Background={
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: "url(https://images.unsplash.com/photo-1613274554329-70f997f5789f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D)",
   
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundRepeat: "no_repeat",
  };

  return (
    <div style={Background}>
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">SIGNUP</Typography>
        <TextField
          label="First Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          label="Email Address"
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        
        <Button variant="contained" color="primary" fullWidth onClick={handleRegister}><Link to='/'>Sign Up </Link></Button>
    
        <p>
        Already have an account <Link to='/lo'>Sign In
        </Link></p>
        {/* <Button  color="primary" fullWidth onClick={handleRegister}>
        <u> Already have an account?</u>
        </Button> */}<pre></pre>
         
      </Paper>
    </Container>
    </div>
  );
};

export default Register;