import React from "react";
import classNames from "classnames";

import "./LoginInput.scss";

const LoginInput = props => {
  const inputClass = classNames("ssls-login-form-input", {
    "ssls-error": !props.isValid && typeof props.isValid === "boolean",
    "ssls-success": props.isValid
  });
  return (
    <div className="LoginInput">
      <input
        type="text"
        className={inputClass}
        placeholder="User name"
        name="login"
        onChange={props.handleChange}
        value={props.login}
      />
    </div>
  );
};

export default LoginInput;
