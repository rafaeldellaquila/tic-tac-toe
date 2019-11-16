import React from "react";
import "./styles.css";
import BoardGame from "../../objects/BoardGame";
import PlayerGame from "../../objects/PlayerGame";

const HashtagGame = () => (
  <BoardGame>
    <ul className="hashtag-game">
      <li className="item">
        <PlayerGame player="ex" />
      </li>
      <li className="item">
        <PlayerGame player="os" />
      </li>
      <li className="item">
        <PlayerGame player="ex" />
      </li>

      <li className="item">
        <PlayerGame player="ex" />
      </li>
      <li className="item">
        <PlayerGame player="os" />
      </li>
      <li className="item">
        <PlayerGame player="ex" />
      </li>

      <li className="item">
        <PlayerGame player="os" />
      </li>
      <li className="item">
        <PlayerGame player="os" />
      </li>
      <li className="item">
        <PlayerGame player="os" />
      </li>
    </ul>
  </BoardGame>
);

export default HashtagGame;
