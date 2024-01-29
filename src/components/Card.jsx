/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function Card({ titre }) {
  const clickHandler = () => {
    console.log("Ya shouldn't have don' that");
  };
  return (
    <article className="card">
      <header className="card__header header__title">{titre}</header>
      <section className="card__main">Content</section>
      <Button className="btn" onClick={clickHandler}>
        bouton
      </Button>
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
