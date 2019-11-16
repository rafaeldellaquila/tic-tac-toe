import React, { useState } from "react";
import "./App.css";
import HeaderGame from "./components/HeaderGame";
import InputCheckbox from "./objects/InputCheckbox";
import AboutPage from "./objects/AboutPage";
import HashtagGame from "./components/HashtagGame";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("");

  return (
    <main className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagGame />
      <InputCheckbox id="show" value="show" content="Mostrar eventos" />
      <AboutPage className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </AboutPage>
    </main>
  );
};

export default App;
