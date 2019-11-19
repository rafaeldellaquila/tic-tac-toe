import React from "react";
import "./styles.css";
import BoardGame from "../../objects/BoardGame";
import PlayerGame from "../../objects/PlayerGame";

const HashtagGame = ({ historyGame, onClick, lastRound }) => (
    <BoardGame>
        <ul className="hashtag-game">
            {historyGame[lastRound].state.map(({ id, content }) => (
                <li
                    key={id}
                    className="item"
                    onClick={() => content === "" && onClick(id)}>
                    <PlayerGame id={id} content={content} />
                </li>
            ))}
        </ul>
    </BoardGame>
);

export default HashtagGame;
