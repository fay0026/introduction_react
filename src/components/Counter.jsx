/* eslint-disable import/no-duplicates */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function Counter({ before, after, className }) {
  const [cpt, setCpt] = useState(0);
  const clickHandler = () => {
    setCpt((a) => a + 1);
    console.log(cpt);
  };
  return (
    <button className={className} type="button" onClick={clickHandler}>
      {before}
      <article>{cpt}</article>
      {after}
    </button>
  );
}

Counter.propTypes = {
  before: PropTypes.node,
  after: PropTypes.node,
  className: PropTypes.string,
};

Counter.defaultProps = {
  before: null,
  after: null,
  className: "",
};

export default Counter;
