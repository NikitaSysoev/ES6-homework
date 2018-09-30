import React from "react";

import "./PasswordInput.scss";

const PasswordInput = () => {
  return (
    <div className="PasswordInput">
      <input
        type="password"
        className="ssls-login-form-input"
        placeholder="****"
      />
    </div>
  );
};

export default PasswordInput;
