import React from "react";
import PropTypes from "prop-types";

function FoldableCard({ titre, content, opened, onClick }) {
  let ret;
  if (opened) {
    ret = (
      <button className="card foldable shown" type="button">
        <header className="card__header header__title">{titre}</header>
        <section className="card__main">{content}</section>
      </button>
    );
  } else {
    ret = (
      <button className="card foldable" type="button" onClick={onClick}>
        <header className="card__header header__title">{titre}</header>
        <section className="card__main" />
      </button>
    );
  }
  return ret;
}

FoldableCard.propTypes = {
  titre: PropTypes.string,
  content: PropTypes.node,
  opened: PropTypes.bool,
};

FoldableCard.defaultProps = {
  titre: "Title",
  content: null,
  opened: false,
};

export default FoldableCard;
