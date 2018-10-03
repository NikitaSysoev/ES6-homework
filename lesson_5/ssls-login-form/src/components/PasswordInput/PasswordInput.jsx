import React from "react";
import classNames from "classnames";

import "./PasswordInput.scss";

const PasswordInput = props => {
  const inputClass = classNames("ssls-login-form-input", {
    "ssls-error": !props.isValid && typeof props.isValid === "boolean",
    "ssls-success": props.isValid
  });
  return (
    <div className="PasswordInput">
      <input
        type="password"
        className={inputClass}
        placeholder="******"
        name="password"
        onChange={props.handleChange}
        value={props.password}
      />
    </div>
  );
};

export default PasswordInput;
