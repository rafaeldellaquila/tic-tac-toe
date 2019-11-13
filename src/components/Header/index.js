import React from "react";
import "./styles.css";
import LogoTicTacToe from "../../objects/LogoTicTacToe";
import About from "../../objects/About";
import Menu from "../../objects/Menu";

const Header = () => (
  <header className="header">
    <LogoTicTacToe />
    <About />
    <Menu />
  </header>
);

export default Header;
