import React, { useState } from "react";
import "./App.css";

import InputCheckbox from "./objects/InputCheckbox";
import AboutPage from "./objects/AboutPage";

import HeaderGame from "./components/HeaderGame";
import HashtagGame from "./components/HashtagGame";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";
import HistoryGame from "./components/HistoryGame";
import WrapperHashtagHistory from "./objects/WrapperHashtagHistory";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");
  const [history, setHistory] = useState(["Start"]);
  const [active, setActive] = useState(false);

  const handleClickAdd = () => setActiveAbout("-active");

  const handleClickRemove = () => setActiveAbout("");

  const addHistory = player => {
    setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`]);
  };

  const ShowHideHistory = () => setActive(old => !!!old);

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />

      <WrapperHashtagHistory active={active}>
        <HashtagGame callback={addHistory} />
        <InputCheckbox onClick={ShowHideHistory} id="show" value="show" content="Mostrar eventos" />
        <HistoryGame history={history} />
      </WrapperHashtagHistory>

      <AboutPage className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </AboutPage>
    </main>
  );
};

export default App;
