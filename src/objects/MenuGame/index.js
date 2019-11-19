import React from "react";
import "./styles.css";

const MenuGame = ({ onClick }) => (
  <a href="#menu-game" className="menu-game" onClick={onClick}>
    <span className="center">Menu</span>
  </a>
);

export default MenuGame;
