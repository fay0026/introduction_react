import { useState } from "react";
import PropTypes from "prop-types";

export default function useShowable(shown, baseClassName) {
  const [isShown, toggleShown] = useState(shown);
  function setIsShown() {
    if (isShown) {
      toggleShown(false);
    } else {
      toggleShown(true);
    }
  }
  let extendedclassName = baseClassName;
  if (shown) {
    extendedclassName = extendedclassName || "shown";
  }
  return {
    isShown,
    toggleShown,
    setIsShown,
    extendedclassName,
  };
}

useShowable.propTypes = {
  shown: PropTypes.bool,
  baseClassName: PropTypes.string,
};

useShowable.defaultProps = {
  shown: false,
  baseClassName: "",
};
