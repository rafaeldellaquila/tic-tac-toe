import React from "react";
import AboutLink from "../../objects/AboutLink";
import IconClose from "../../objects/IconClose";
import LogoTicTacToe from "../../objects/LogoTicTacToe";
import "./styles.css";
const HeaderInternal = ({ onClick }) => (
  <header className="header-internal">
    <LogoTicTacToe negative />
    <AboutLink className="-light" onClick={onClick} />
    <IconClose onClick={onClick} />
  </header>
);

export default HeaderInternal;
