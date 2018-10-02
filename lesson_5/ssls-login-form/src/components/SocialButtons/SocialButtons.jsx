import React from "react";

import "./SocialButtons.scss";

const SocialButtons = () => {
  return (
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
  );
};

export default SocialButtons;
