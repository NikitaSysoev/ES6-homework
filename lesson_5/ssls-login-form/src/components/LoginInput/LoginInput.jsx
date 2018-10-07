import React from "react";
import classNames from "classnames";

import "./LoginInput.scss";

const LoginInput = props => {
  const inputClass = classNames("ssls-login-form-input", {
    "ssls-error": !props.isValid,
    "ssls-success": props.isValid && props.isValid !== 'empty'
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
