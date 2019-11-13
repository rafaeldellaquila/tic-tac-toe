import React from "react";
import "./App.css";
import Checkbox from "./objects/Checkbox";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import Aboutpage from "./objects/Aboutpage";
import About from "./objects/About";
import IconClose from "./objects/IconClose";
import LogoTicTacToe from "./objects/LogoTicTacToe";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" value="show" content="Mostrar eventos" />
    <Aboutpage>
      <LogoTicTacToe />
      <About />
      <IconClose />
    </Aboutpage>
  </main>
);

export default App;
