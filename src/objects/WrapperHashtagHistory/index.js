import React, { useState } from "react";
import InputCheckBox from "../InputCheckbox";
import HistoryGame from "../../components/HistoryGame";
import HashtagGame from "../../components/HashtagGame";

const WrapperHashtagHistory = () => {
    const [history, setHistory] = useState(["Start"]);
    const [active, setActive] = useState(false);
    const [nextPlayer, setNextPlayer] = useState("x");
    const [lastRound, setLastRound] = useState(0);
    const [historyGame, setHistoryGame] = useState([
        {
            round: 0,
            state: [
                { id: 1, content: "" },
                { id: 2, content: "" },
                { id: 3, content: "" },
                { id: 4, content: "" },
                { id: 5, content: "" },
                { id: 6, content: "" },
                { id: 7, content: "" },
                { id: 8, content: "" },
                { id: 9, content: "" }
            ]
        }
    ]);

    const addHistory = player => {
        setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`]);
    };

    const changeHistory = key => {
        setHistory(old => old.slice(0, key + 1));
    };
    const ShowHideHistory = () => setActive(old => !!!old);
    const handleClick = id => {
        setHistoryGame(old => [
            ...old,
            {
                round: lastRound + 1,
                state: old[lastRound].state.map(player =>
                    player.id === id ? { id, content: nextPlayer } : player
                )
            }
        ]);
        setLastRound(old => old + 1);
        addHistory(nextPlayer);
        setNextPlayer(old => (old === "x" ? "o" : "x"));
    };

    return (
        <div className={`wrapper-hashtaghistory ${active && "-active"}`}>
            <HashtagGame
                lastRound={lastRound}
                historyGame={historyGame}
                onClick={handleClick}
            />
            <InputCheckBox
                onClick={ShowHideHistory}
                id="show"
                value="show"
                content="Mostrar eventos"
            />
            <HistoryGame history={history} onClick={changeHistory} />
        </div>
    );
};
export default WrapperHashtagHistory;
