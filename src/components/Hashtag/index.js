import React from "react";
import "./styles.css";
import Board from "../../objects/Board";
import Player from "../../objects/Player";

const Hashtag = () => (
  <Board>
    <ul className="hashtag">
      <li className="item">
        <Player player="ex" />
      </li>
      <li className="item">
        <Player player="os" />
      </li>
      <li className="item">
        <Player player="ex" />
      </li>

      <li className="item">
        <Player player="ex" />
      </li>
      <li className="item">
        <Player player="os" />
      </li>
      <li className="item">
        <Player player="ex" />
      </li>

      <li className="item">
        <Player player="os" />
      </li>
      <li className="item">
        <Player player="os" />
      </li>
      <li className="item">
        <Player player="os" />
      </li>
    </ul>
  </Board>
);

export default Hashtag;
