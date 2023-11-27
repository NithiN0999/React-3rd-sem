import React from "react";
import "./Loginform.css"

const loginform = () => {
    return (
        <div className="cover">
            <h1>Login Page</h1>
            <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />

      <div className="login-btn">Login</div>
      
      <p className="text">Or login using</p>

      <div className="alt-login">
        <div className='facebookp'></div>
        <div className="google"></div>

      </div>

        </div>
    )
}

export default loginform