import React from "react";
import "./styles.css";

const LogGame = ({ content, className }) => (
  <output className={`log-game ${className}`}>{content}</output>
);

export default LogGame;
