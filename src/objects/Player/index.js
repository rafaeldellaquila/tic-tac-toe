import React from "react";
import Ex from "../../img/Ex.png";
import Os from "../../img/Os.png";

const Player = ({ player }) => {
  let players = [];
  players["ex"] = Ex;
  players["os"] = Os;

  return (
    <button className="player">
      <img src={players[player]} alt={`Player ${player.toUpperCase()}`} />
    </button>
  );
};

export default Player;
