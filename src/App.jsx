import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldCat } from "@fortawesome/free-solid-svg-icons";
import Card from "./components/Card";
import FoldableCard from "./components/FoldableCard";
import Counter from "./components/Counter";

function App() {
  const [gates, setGates] = useState({
    one: false,
    two: false,
    three: false,
  });

  const [counts, setCounts] = useState({
    simple: 0,
    chats: 0,
  });

  const { simple, chats } = counts;
  const { one, two, three } = gates;

  const simpleHandler = (cpt) => {
    setCounts({ simple: cpt, chats });
  };
  const chatsHandler = (cpt) => {
    setCounts({ simple, chats: cpt });
  };

  const gatesHandler1 = () => {
    if (gates.one) {
      setGates({ one: false, two, three });
    } else {
      setGates({ one: true, two, three });
    }
  };
  const gatesHandler2 = () => {
    if (gates.two) {
      setGates({ one, two: false, three });
    } else {
      setGates({ one, two: true, three });
    }
  };
  const gatesHandler3 = () => {
    if (gates.three) {
      setGates({ one, two, three: false });
    } else {
      setGates({ one, two, three: true });
    }
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
            content={
              <Counter
                className="btn"
                onChange={simpleHandler}
                initial={simple}
              />
            }
          />
          <FoldableCard
            titre="Compteur avec 2 chats"
            content={
              <Counter
                before={<FontAwesomeIcon icon={faShieldCat} />}
                after={<FontAwesomeIcon icon={faShieldCat} />}
                className="btn"
                onChange={chatsHandler}
                initial={chats}
              />
            }
            opened={one}
            onClick={gatesHandler1}
          />
          <FoldableCard
            titre="Total compteurs"
            content={chats + simple}
            opened={two}
            onClick={gatesHandler2}
          />
          <FoldableCard titre="Rien" opened={three} onClick={gatesHandler3} />
        </div>
      </main>
      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;
