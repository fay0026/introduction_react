import React from "react";

function Card({ titre, ...props }) {
  return (
    <article className="card">
      <header className="card__header header__title">{titre}</header>
      <section className="card__main">Content</section>
    </article>
  );
}

export default Card;
