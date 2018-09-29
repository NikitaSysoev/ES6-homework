import React from "react";

import "./Login.scss";

const Login = () => {
  return (
    <div className="ssls-login-wrapper">
      <div className="ssls-login-form-head">
        <div className="ssls-login-form-header">
          <h1>Login</h1>
        </div>
        <div className="ssls-login-form-inputs">
          <input
            type="text"
            className="ssls-login-form-input"
            placeholder="User name"
          />
          <input
            type="password"
            className="ssls-login-form-input"
            placeholder="****"
          />
        </div>
        <div className="ssls-login-form-remember">
          <div>
            <input type="checkbox" />
            <p>Remember Me</p>
          </div>
          <a href="#">Forgot Password?</a>
        </div>
        <div className="ssls-login-form-btnGroup">
          <button type="button" className="ssls-login-form-btn">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;