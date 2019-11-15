import React from "react";
import "./App.css";
import CheckBox from "./objects/CheckBox";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import AboutPage from "./objects/AboutPage";
import AboutLink from "./objects/AboutLink";
import IconClose from "./objects/IconClose";
import LogoTicTacToe from "./objects/LogoTicTacToe";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <CheckBox id="show" value="show" content="Mostrar eventos" />
    <AboutPage>
      <LogoTicTacToe negative />
      <AboutLink className="-light" />
      <IconClose />
    </AboutPage>
  </main>
);

export default App;
