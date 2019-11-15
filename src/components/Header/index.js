import React from "react";
import "./styles.css";
import LogoTicTacToe from "../../objects/LogoTicTacToe";
import AboutLink from "../../objects/AboutLink";
import Menu from "../../objects/Menu";

const Header = () => (
  <header className="header">
    <LogoTicTacToe />
    <AboutLink />
    <Menu />
  </header>
);

export default Header;
