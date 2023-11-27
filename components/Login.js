import React from 'react';
import "./Login.css"; 
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function Login()
{
  return (
    <body>
    <div class="login-form">
        <div class="login">
            <h2>Sign In</h2>
            <div class="inputbox">
                <input type="text" placeholder="Username" required/>
            </div>
            <div class="inputbox">
                <input type="password" placeholder="Password" required/>
            </div>
            <div class="inputbox">
              <Link to='/'>
              <Button variant="contained">Sign In</Button>

              </Link>
            </div>
            <br></br>
            <br></br>
            <div class="bottom-content">
                <a href="#">Forgot Password</a>
                <Link to='/re'>
                Sign Up
                </Link>
            </div>
        </div>
    </div>
</body>
  );
}
  export default Login;
