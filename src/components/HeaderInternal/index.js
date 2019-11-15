import React from "react";
import AboutLink from "../../objects/AboutLink";
import IconClose from "../../objects/IconClose";
import LogoTicTacToe from "../../objects/LogoTicTacToe";
import "./styles.css";
const HeaderInternal = () => (
  <header className="header-internal">
    <LogoTicTacToe negative />
    <AboutLink className="-light" />
    <IconClose />
  </header>
);

export default HeaderInternal;
