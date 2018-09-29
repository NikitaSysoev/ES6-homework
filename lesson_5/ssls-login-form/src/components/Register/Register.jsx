import React from "react";

import "./Register.scss";

const Register = () => {
  return (
    <div className="ssls-login-wrapper">
      <div className="ssls-login-form-footer">
        <div className="ssls-login-form-text">
          <p>
            Don't have an Account?
            <span> Register Now!</span>
          </p>
        </div>
        <div className="ssls-login-form-btnGroup">
          <button type="button" className="ssls-login-form-btn">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
