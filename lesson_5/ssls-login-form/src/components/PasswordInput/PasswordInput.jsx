import React from "react";
import classNames from "classnames";

import "./PasswordInput.scss";

const PasswordInput = props => {
  const inputClass = classNames("ssls-login-form-input", {
    "ssls-error": !props.isValid && props.isValid !== null,
    "ssls-success": props.isValid
  });
  return (
    <div className="PasswordInput">
      <input
        type="password"
        className={inputClass}
        placeholder="******"
        name="password"
        onChange={props.onChange}
        value={props.password.trim()}
      />
    </div>
  );
};

export default PasswordInput;
