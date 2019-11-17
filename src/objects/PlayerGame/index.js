import React from "react";
import "./styles.css";
import Ex from "../../img/Ex.png";
import Os from "../../img/Os.png";

const PlayerGame = ({ content = "" }) => {
  let players = [];
  players[""] = "";
  players["ex"] = Ex;
  players["os"] = Os;

  return (
    <button className="player-game">
      {players[content] && (
        <img src={players[content]} alt={`Player ${content}`} />
      )}
      {/* Usando && direto pois disparar o segundo trecho apenas se for true se nao retorna vazio */}
    </button>
  );
};

export default PlayerGame;
