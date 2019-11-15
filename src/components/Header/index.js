import React from "react";
import "./styles.css";
import LogoTicTacToe from "../../objects/LogoTicTacToe";
import AboutLink from "../../objects/AboutLink";
import Menu from "../../objects/Menu";

const Header = ({ onClick }) => (
  <header className="header">
    <LogoTicTacToe />
    <AboutLink onClick={onClick} />
    <Menu onClick={onClick} />
  </header>
);

export default Header;
