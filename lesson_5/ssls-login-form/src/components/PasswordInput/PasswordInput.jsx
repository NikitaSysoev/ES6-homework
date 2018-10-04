import React from "react";
import classNames from "classnames";

import "./PasswordInput.scss";

const PasswordInput = props => {
  const inputClass = classNames("ssls-login-form-input", {
    "ssls-error": props.isValid === "inValid",
    "ssls-success": props.isValid === "valid"
  });
  return (
    <div className="PasswordInput">
      <input
        type="password"
        className={inputClass}
        placeholder="******"
        name="password"
        onChange={props.onChange}
        value={props.password}
      />
    </div>
  );
};

export default PasswordInput;
