import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import Button from "./Button";

<FontAwesomeIcon icon={faCircleMinus} />;

function FoldableCard({ titre, content, opened, onClick }) {
  let ret;
  if (opened) {
    ret = (
      <Button className="card foldable shown">
        <Card
          titre={
            <>
              {titre}
              <FontAwesomeIcon icon={faCircleMinus} onClick={onClick} />
            </>
          }
          content={content}
        />
      </Button>
    );
  } else {
    ret = (
      <Button className="card foldable">
        <Card
          titre={
            <>
              {titre}
              <FontAwesomeIcon icon={faCirclePlus} onClick={onClick} />
            </>
          }
          content={null}
        />
      </Button>
    );
  }
  return ret;
}

FoldableCard.propTypes = {
  titre: PropTypes.string,
  content: PropTypes.node,
  opened: PropTypes.bool,
};

FoldableCard.defaultProps = {
  titre: "Title",
  content: null,
  opened: false,
};

export default FoldableCard;
