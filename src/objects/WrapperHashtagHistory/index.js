import React from "react";

const WrapperHashtagHistory = ({ children, active = false }) => (
  <div className={`wrapper-hashtaghistory ${active && "-active"}`}>
    {children}
  </div>
);

export default WrapperHashtagHistory;
