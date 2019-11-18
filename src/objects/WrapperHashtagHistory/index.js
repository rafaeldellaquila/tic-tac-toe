import React, { useState } from "react";
import InputCheckBox from "../InputCheckbox";
import HistoryGame from "../../components/HistoryGame";
import HashtagGame from "../../components/HashtagGame";

const WrapperHashtagHistory = () => {
    const [history, setHistory] = useState(["Start"]);
    const [active, setActive] = useState(false);

    const addHistory = player => {
        setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`]);
    };

    const changeHistory = key => setHistory(old => old.slice(0, key + 1));

    const ShowHideHistory = () => setActive(old => !!!old);

    return (
        <div className={`wrapper-hashtaghistory ${active && "-active"}`}>
            <HashtagGame callback={addHistory} />
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
