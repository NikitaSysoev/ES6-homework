import React from "react";

import "./SocialLogin.scss";
import SocialButton from "../SocialButton";

const SocialLogin = () => {
  return (
    <div className="ssls-login-wrapper">
      <div className="ssls-login-form-middle">
        <div className="ssls-login-form-header">
          <h2>Login</h2>
        </div>
        <div className="ssls-login-form-header">
          <p>With your social media account</p>
        </div>
        <div className="ssls-login-form-social">
          <SocialButton netName={"twitter"} />
          <SocialButton netName={"facebook"} />
          <SocialButton netName={"google"} />
        </div>
        <div className="ssls-login-form-border" />
      </div>
    </div>
  );
};

export default SocialLogin;
