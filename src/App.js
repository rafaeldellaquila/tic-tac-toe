import React from "react";
import "./App.css";
import Header from "./components/Header";
import CheckBox from "./objects/CheckBox";
import AboutPage from "./objects/AboutPage";
import Hashtag from "./components/Hashtag";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <CheckBox id="show" value="show" content="Mostrar eventos" />
    <AboutPage>
      <HeaderInternal />
      <ProfileUser />
    </AboutPage>
  </main>
);

export default App;
