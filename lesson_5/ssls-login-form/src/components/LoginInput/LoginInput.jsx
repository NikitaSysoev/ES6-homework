import React from "react";

import "./LoginInput.scss";

const LoginInput = props => {
  return (
    <div className="LoginInput">
      <input
        type="text"
        className={
          !props.correct && typeof props.correct === "object"
            ? "ssls-login-form-input"
            : !props.correct
              ? "ssls-login-form-input ssls-error"
              : "ssls-login-form-input ssls-success"
        }
        placeholder="User name"
        name="login"
        onChange={props.handleChange}
        value={props.login}
      />
    </div>
  );
};

export default LoginInput;
