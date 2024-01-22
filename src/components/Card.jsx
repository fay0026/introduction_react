import React from "react";
import PropTypes from "prop-types";

function Card({ titre }) {
  return (
    <article className="card">
      <header className="card__header header__title">{titre}</header>
      <section className="card__main">Content</section>
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
