import React from "react";
import "./styles.css";
import LogoTicTacToe from "../../objects/LogoTicTacToe";
import AboutLink from "../../objects/AboutLink";
import MenuGame from "../../objects/MenuGame";

const Header = ({ onClick }) => (
  <header className="header-game">
    <LogoTicTacToe />
    <AboutLink onClick={onClick} />
    <MenuGame onClick={onClick} />
  </header>
);

export default Header;
