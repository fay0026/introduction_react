/* eslint-disable no-console */
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function Counter({ before, after, className, onChange }) {
  console.log("WE PASS THERE");
  const [cpt, setCpt] = useState(0);
  const clickHandler = () => {
    setCpt(cpt + 1);
    console.log(cpt);
  };
  useEffect(() => {
    console.log(typeof onChange);
    if (typeof onChange !== "function") {
      console.log("WHYYYY");
    } else {
      console.log("HANDLE");
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
};

Counter.defaultProps = {
  before: null,
  after: null,
  className: "",
  onChange: null,
};

export default Counter;
