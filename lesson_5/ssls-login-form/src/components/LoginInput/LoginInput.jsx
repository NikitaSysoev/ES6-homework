import React from "react";
import classNames from "classnames";

import "./LoginInput.scss";

const LoginInput = props => {
  const inputClass = classNames("ssls-login-form-input", {
    "ssls-error": props.isValid === "inValid",
    "ssls-success": props.isValid === "valid"
  });
  return (
    <div className="LoginInput">
      <input
        type="text"
        className={inputClass}
        placeholder="User name"
        name="login"
        onChange={props.onChange}
        value={props.login}
      />
    </div>
  );
};

export default LoginInput;
