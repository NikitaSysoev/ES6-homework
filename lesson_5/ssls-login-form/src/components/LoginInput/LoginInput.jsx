import React from "react";

import "./LoginInput.scss";

const LoginInput = () => {
  return (
    <div className="LoginInput">
      <input
        type="text"
        className="ssls-login-form-input"
        placeholder="User name"
      />
    </div>
  );
};

export default LoginInput;
