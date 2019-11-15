import React from "react";
import "./styles.css";
const Aboutpage = ({ children, className = "" }) => (
  <article className={`about-page ${className}`}>{children}</article>
);

export default Aboutpage;
