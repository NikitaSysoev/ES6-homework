import React from "react";
import classNames from "classnames";

import "./SocialButton.scss";

const SocialButton = props => {
  const classSocial = classNames("ssls-social-button", {
    [`ssls-btn-${props.netName}`]: props.netName
  });
  return (
    <button type="button" className={classSocial}>
      {props.netName}
    </button>
  );
};

export default SocialButton;
