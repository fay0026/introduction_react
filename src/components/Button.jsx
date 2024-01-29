/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldCat } from "@fortawesome/free-solid-svg-icons";

function Button({ children, className, onClick }) {
  return (
    <button className={className} type="button" onClick={onClick}>
      <FontAwesomeIcon icon={faShieldCat} />
      <article>{children}</article>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  className: "",
};

export default Button;
