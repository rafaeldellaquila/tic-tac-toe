import React, { useState } from "react";
import "./App.css";

import AboutPage from "./objects/AboutPage";
import WrapperHashtagHistory from "./objects/WrapperHashtagHistory";

import HeaderGame from "./components/HeaderGame";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";

const App = () => {
    const [activeAbout, setActiveAbout] = useState("");

    const handleClickAdd = () => setActiveAbout("-active");
    const handleClickRemove = () => setActiveAbout("");

    return (
        <main id="main" className="app">
            <HeaderGame onClick={handleClickAdd} />

            <WrapperHashtagHistory />

            <AboutPage className={activeAbout}>
                <HeaderInternal onClick={handleClickRemove} />
                <ProfileUser />
            </AboutPage>
        </main>
    );
};

export default App;
