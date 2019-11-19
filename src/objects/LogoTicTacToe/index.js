import React from "react";
import TicTacToe from "../../img/logo.svg";
import TicTacToeNegative from "../../img/logo-negative.svg";

const LogoTicTacToe = ({ negative = false }) => (
  <img
    className="logo-tictactoe"
    src={negative ? TicTacToeNegative : TicTacToe}
    alt="logo text tic tac toe"
  />
);

export default LogoTicTacToe;
