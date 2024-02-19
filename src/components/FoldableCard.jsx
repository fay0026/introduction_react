import { React /* , useState */ } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import useShowable from "../hooks/useShowable";

<FontAwesomeIcon icon={faCircleMinus} />;

function FoldableCard({ titre, content }) {
  const { isShown, setIsShown } = useShowable();
  let ret;
  if (isShown) {
    ret = (
      <Card
        titre={
          <>
            {titre}
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
        titre={
          <>
            {titre}
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
};

FoldableCard.defaultProps = {
  titre: "Title",
  content: null,
};

export default FoldableCard;
