/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldCat } from "@fortawesome/free-solid-svg-icons";
import Card from "./components/Card";

function App() {
  const clickHandler = () => {
    console.log("Ya shouldn't have don' that");
  };
  const clickHandler2 = () => {
    console.log("Ya shouldn't have don' that");
  };
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <div className="cards">
          <Card
            titre="Titre 1"
            btn_content={<FontAwesomeIcon icon={faShieldCat} />}
          />
          <Card titre="Titre 2" onClick={clickHandler} />
          <Card titre="Titre 3" />
          <Card titre="Titre 4" />
          {/* {Card("Titre 1")}
          {Card("Titre 2")}
          {Card("Titre 3")}
  {Card("Titre 4")} */}
        </div>
      </main>
      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;
