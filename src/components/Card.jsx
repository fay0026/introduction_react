import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function Card({ titre }) {
  return (
    <article className="card">
      <header className="card__header header__title">{titre}</header>
      <section className="card__main">Content</section>
      <Button className="btn">bouton</Button>
    </article>
  );
}

Card.propTypes = {
  titre: PropTypes.string,
};

Card.defaultProps = {
  titre: "Title",
};

export default Card;
