import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldCat } from "@fortawesome/free-solid-svg-icons";
import Card from "./components/Card";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <div className="cards">
          <Card
            titre="Carte"
            content={<FontAwesomeIcon icon={faShieldCat} />}
          />
          <Card
            titre="Compteur simple"
            content={<Counter className="Compteur" />}
          />
          <Card
            titre="Compteur avec 2 chats"
            content={
              <Counter
                before={<FontAwesomeIcon icon={faShieldCat} />}
                after={<FontAwesomeIcon icon={faShieldCat} />}
                className="Compteur"
              />
            }
          />
        </div>
      </main>
      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;
