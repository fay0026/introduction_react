import React, { useState, useEffect } from "react";
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

export default Counter;
