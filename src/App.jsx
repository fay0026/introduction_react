/* eslint-disable no-console */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldCat } from "@fortawesome/free-solid-svg-icons";
import Card from "./components/Card";
import Counter from "./components/Counter";

function App() {
  const [counts, setCounts] = useState({
    simple: 0,
    chats: 0,
  });
  const { simple, chats } = counts;
  const simpleHandler = (cpt) => {
    setCounts({ simple: cpt, chats });
    console.log(cpt);
    console.log("Le simple est +1");
  };
  const chatsHandler = (cpt) => {
    setCounts({ simple, chats: cpt });
    console.log(cpt);
    console.log("Miaou");
  };
  // console.log(typeof chatsHandler);
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <div className="cards">
          <Card
            titre="Compteur simple"
            content={<Counter className="Compteur" onChange={simpleHandler} />}
          />
          <Card
            titre="Compteur avec 2 chats"
            content={
              <Counter
                before={<FontAwesomeIcon icon={faShieldCat} />}
                after={<FontAwesomeIcon icon={faShieldCat} />}
                className="Compteur"
                onChange={chatsHandler}
              />
            }
          />
          <Card titre="Total compteurs" content={chats + simple} />
        </div>
      </main>
      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;
