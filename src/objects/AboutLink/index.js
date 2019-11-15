import React from "react";
import "./styles.css";

const AboutLink = ({ className = "" }) => (
  <a className={`about-link ${className}`} href="#to-do">
    About
  </a>
);

export default AboutLink;
