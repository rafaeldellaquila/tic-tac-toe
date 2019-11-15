import React from "react";
import "./styles.css";

const AboutLink = ({ className = "", onClick }) => (
  <a className={`about-link ${className}`} href="#to-do" onClick={onClick}>
    About
  </a>
);

export default AboutLink;
