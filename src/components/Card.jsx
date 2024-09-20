import React from "react";
import Button from "./Button";

function Card({ titre, content, onClick }) {
  return (
    <Button className="card" onClick={onClick}>
      <header className="card__header header__title">{titre}</header>
      <section className="card__main">{content}</section>
    </Button>
  );
}

export default Card;
