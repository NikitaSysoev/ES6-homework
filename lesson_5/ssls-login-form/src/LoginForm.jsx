import React from "react";

import Login from "./components/Login";
import SocialLogin from "./components/SocialLogin";
import Register from "./components/Register";

const LoginForm = props => {
  return (
    <div>
      <Login
        textPasswordError={props.textPasswordError}
        textLoginError={props.textLoginError}
        loginValidator={props.loginValidator}
        passwordValidator={props.passwordValidator}
        loginError={props.loginError}
        passwordError={props.passwordError}
      />
      <SocialLogin />
      <Register />
    </div>
  );
};

export default LoginForm;
