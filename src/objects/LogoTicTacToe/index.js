import React from "react";
import TicTacToe from "../../img/logo.png";
import TicTacToeNegative from "../../img/logo-negative.png";

const LogoTicTacToe = ({ negative = false }) => (
  <img
    className="logo-tictactoe"
    src={negative ? TicTacToeNegative : TicTacToe}
    alt="logo text tic tac toe"
  />
);

export default LogoTicTacToe;
