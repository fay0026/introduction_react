import React from "react";
import PropTypes from "prop-types";

function Card({ titre, button }) {
  return (
    <article className="card">
      <header className="card__header header__title">{titre}</header>
      <section className="card__main">Content</section>
      {button}
    </article>
  );
}

Card.propTypes = {
  titre: PropTypes.string,
  button: PropTypes.node,
};

Card.defaultProps = {
  titre: "Title",
  button: null,
};

export default Card;
