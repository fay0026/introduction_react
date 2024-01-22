import React from "react";

function Card(Titre) {
  return (
    <article className="card">
      <header className="card__header header__title">{Titre}</header>
      <section className="card__main">Content</section>
    </article>
  );
}

export default Card;
