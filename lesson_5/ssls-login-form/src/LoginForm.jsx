import React from "react";

import Login from "./components/Login";
import SocialLogin from "./components/SocialLogin";
import Register from "./components/Register";

const LoginForm = props => {
  return (
    <div>
      <Login />
      <SocialLogin />
      <Register />
    </div>
  );
};

export default LoginForm;
