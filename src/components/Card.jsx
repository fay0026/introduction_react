import React from "react";
import PropTypes from "prop-types";

function Card({ titre, content }) {
  return (
    <article className="card">
      <header className="card__header header__title">{titre}</header>
      <section className="card__main">Content</section>
      {content}
    </article>
  );
}

Card.propTypes = {
  titre: PropTypes.string,
  content: PropTypes.node,
};

Card.defaultProps = {
  titre: "Title",
  content: null,
};

export default Card;
