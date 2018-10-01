import React from "react";

import "./PasswordInput.scss";

const PasswordInput = props => {
  return (
    <div className="PasswordInput">
      <input
        type="password"
        className="ssls-login-form-input"
        placeholder="******"
        name="password"
        onChange={props.handleChange}
        value={props.password}
      />
    </div>
  );
};

export default PasswordInput;
