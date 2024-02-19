import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function Counter({ before, after, className, onChange, initial }) {
  // console.log("WE PASS THERE");
  const [cpt, setCpt] = useState(initial);
  const clickHandler = () => {
    setCpt(cpt + 1);
    // console.log(cpt);
  };
  useEffect(() => {
    // console.log(typeof onChange);
    if (onChange != null) {
      onChange(cpt);
    }
  }, [cpt]);
  return (
    <Button className={className} onClick={clickHandler}>
      {before}
      {cpt}
      {after}
    </Button>
  );
}

Counter.propTypes = {
  before: PropTypes.node,
  after: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func,
  initial: PropTypes.number,
};

Counter.defaultProps = {
  before: null,
  after: null,
  className: "",
  onChange: null,
  initial: 0,
};

export default Counter;
