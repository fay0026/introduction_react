import { useState } from "react";

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