import React from "react";
import PropTypes from "prop-types";

function Button({ content, className, onClick }) {
  if (content == null) {
    var retour = "bouton";
  } else {
    var retour = content;
  }
  return (
    <button className={className} type="button" onClick={onClick}>
      <article>{retour}</article>
    </button>
  );
}

Button.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  content: null,
  className: "",
};

export default Button;
