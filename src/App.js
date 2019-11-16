import React, { useState } from "react";
import "./App.css";

import InputCheckbox from "./objects/InputCheckbox";
import LogGame from "./objects/LogGame";
import AboutPage from "./objects/AboutPage";

import HeaderGame from "./components/HeaderGame";
import HashtagGame from "./components/HashtagGame";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("");

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagGame />
      <InputCheckbox id="show" value="show" content="Mostrar eventos" />
      <LogGame content="Adicionou O" />
      <AboutPage className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </AboutPage>
    </main>
  );
};

export default App;
