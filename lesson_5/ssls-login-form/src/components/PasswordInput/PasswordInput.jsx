import React from "react";

import "./PasswordInput.scss";

const PasswordInput = props => {
  return (
    <div className="PasswordInput">
      <input
        type="password"
        className={
          !props.correct && typeof props.correct === "object"
            ? "ssls-login-form-input"
            : !props.correct
              ? "ssls-login-form-input ssls-error"
              : "ssls-login-form-input ssls-success"
        }
        placeholder="******"
        name="password"
        onChange={props.handleChange}
        value={props.password}
      />
    </div>
  );
};

export default PasswordInput;
