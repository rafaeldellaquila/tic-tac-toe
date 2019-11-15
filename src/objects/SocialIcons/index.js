import React from "react";

const SocialIcons = ({ action, src, alt }) => (
  <a href={action} target="_blank">
    <img className="social-icons" src={src} alt={alt} />
  </a>
);

export default SocialIcons;
