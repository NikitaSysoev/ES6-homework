import React from "react";

import './SocialLogin.scss';

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
          <button type="button" className="ssls-btn-twitter">
            Twitter
          </button>
          <button type="button" className="ssls-btn-facebook">
            Facebook
          </button>
          <button type="button" className="ssls-btn-google">
            Google+
          </button>
        </div>
        <div className="ssls-login-form-border" />
      </div>
    </div>
  );
};

export default SocialLogin;