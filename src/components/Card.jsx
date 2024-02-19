import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function Card({ titre, content, onClick }) {
  return (
    <Button className="card" onClick={onClick}>
      <header className="card__header header__title">{titre}</header>
      <section className="card__main">{content}</section>
    </Button>
  );
}

Card.propTypes = {
  titre: PropTypes.string,
  content: PropTypes.node,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  titre: "Title",
  content: null,
  onClick: null,
};

export default Card;
