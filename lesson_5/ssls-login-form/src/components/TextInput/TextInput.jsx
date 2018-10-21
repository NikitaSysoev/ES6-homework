import React from "react";
import classNames from "classnames";

import "./TextInput.scss";

const TextInput = props => {
  const inputClass = classNames("ssls-login-form-input", {
    "ssls-error": !props.isValid && props.isValid !== null,
    "ssls-success": props.isValid
  });
  return (
    <div className="TextInput">
      <input
        type={props.type}
        className={inputClass}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        value={props.value.trim()}
      />
      {props.error ? (
        <p className={"ssls-text-error"}>{props.textError}</p>
      ) : null}
    </div>
  );
};

export default TextInput;
