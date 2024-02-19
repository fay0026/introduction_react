import { React, useEffect /* , useState */ } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import useShowable from "../hooks/useShowable";

<FontAwesomeIcon icon={faCircleMinus} />;

function FoldableCard({ title, content, opened, onToggleOpened }) {
  const { isShown, setIsShown } = useShowable(opened);
  useEffect(() => {
    onToggleOpened();
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

FoldableCard.propTypes = {
  titre: PropTypes.string,
  content: PropTypes.node,
  onToggleOpened: PropTypes.func,
};

FoldableCard.defaultProps = {
  titre: "Title",
  content: null,
  onToggleOpened: null,
};

export default FoldableCard;
