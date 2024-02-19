import React from "react";
import PropTypes from "prop-types";

function Button({ children, className, onClick }) {
  function ItsTimeToStop(ev) {
    ev.stopPropagation();
    if (onClick != null) {
      onClick();
    }
  }

  return (
    <button className={className} type="button" onClick={ItsTimeToStop}>
      <article>{children}</article>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: "bouton",
  className: "",
  onClick: null,
};

export default Button;
