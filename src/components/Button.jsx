import React from "react";
import PropTypes from "prop-types";

function Button({ children, className, onClick }) {
  let retour;
  if (children == null) {
    retour = "bouton";
  } else {
    retour = children;
  }
  return (
    <button className={className} type="button" onClick={onClick}>
      <article>{retour}</article>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  className: "",
  onClick: null,
};

export default Button;
