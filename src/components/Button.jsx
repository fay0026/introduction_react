import React from "react";

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

export default Button;
