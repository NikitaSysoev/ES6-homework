import React from "react";

import "./LoginInput.scss";

const LoginInput = props => {
  return (
    <div className="LoginInput">
      <input
        type="text"
        className="ssls-login-form-input"
        placeholder="User name"
        name="login"
        onChange={props.handleChange}
        value={props.login}
      />
    </div>
  );
};

export default LoginInput;
