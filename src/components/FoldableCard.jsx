import { React, useEffect /* , useState */ } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import useShowable from "../hooks/useShowable";

<FontAwesomeIcon icon={faCircleMinus} />;

function FoldableCard({ title, content, opened, onToggleOpened }) {
  const { isShown, setIsShown } = useShowable(opened);
  useEffect(() => {
    if (onToggleOpened != null) {
      onToggleOpened();
    }
  }, [opened]);
  let ret;
  if (isShown) {
    ret = (
      <Card
        title={
          <>
            {title}
            <FontAwesomeIcon icon={faCircleMinus} />
          </>
        }
        content={content}
        onClick={setIsShown}
      />
    );
  } else {
    ret = (
      <Card
        title={
          <>
            {title}
            <FontAwesomeIcon icon={faCirclePlus} />
          </>
        }
        content={null}
        onClick={setIsShown}
      />
    );
  }
  return ret;
}

export default FoldableCard;
