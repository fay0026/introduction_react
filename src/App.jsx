/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldCat } from "@fortawesome/free-solid-svg-icons";
import Card from "./components/Card";

function App() {
  let cpt = 0;
  const clickHandler = () => {
    cpt += 1;
    console.log(cpt);
  };
  const clickHandler2 = () => {
    cpt += 1;
    console.log(cpt);
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
            content={<FontAwesomeIcon icon={faShieldCat} />}
          />
          <Card titre="Titre 2" onClick={clickHandler} />
          <Card titre="Titre 3" content={cpt} onClick={clickHandler2} />
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
