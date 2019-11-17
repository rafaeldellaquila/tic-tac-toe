import React from "react";
import "./styles.css";
import LogGame from "../../objects/LogGame";

const HistoryGame = ({ history }) => (
  <ol className="history-game">
    {history.map((content, key) => (
      <li key={key} className="action">
        <LogGame content={content} />
      </li>
    ))}
  </ol>
);

export default HistoryGame;
