import React from "react";
import "./styles.css";
import x from "../../img/Ex.png";
import o from "../../img/Os.png";

const PlayerGame = ({ content = "" }) => {
  let players = [];
  players[""] = "";
  players["x"] = x;
  players["o"] = o;

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
