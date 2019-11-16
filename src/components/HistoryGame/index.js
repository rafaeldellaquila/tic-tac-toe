import React from "react";
import "./styles.css";
import LogGame from "../../objects/LogGame";

const HistoryGame = ({ className }) => (
  <ol className={`history-game ${className}`}>
    <li className="action">
      <LogGame content="Adicionou X" />
    </li>
    <li className="action">
      <LogGame content="Adicionou O" />
    </li>
    <li className="action">
      <LogGame content="Adicionou X" />
    </li>
    <li className="action">
      <LogGame content="Adicionou O" />
    </li>
    <li className="action">
      <LogGame content="Adicionou X" />
    </li>
    <li className="action">
      <LogGame content="Adicionou O" />
    </li>
    <li className="action">
      <LogGame content="Adicionou X" />
    </li>
    <li className="action">
      <LogGame className="-end" content="Empate!" />
    </li>
  </ol>
);

export default HistoryGame;
