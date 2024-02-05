/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
function Card({ titre, content, onClick }) {
  return (
    <article className="card">
      <header className="card__header header__title">{titre}</header>
      <section className="card__main">Content</section>
      <Button className="btn" onClick={onClick}>
        {content}
      </Button>
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
