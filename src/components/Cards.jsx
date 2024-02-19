import { React, useState } from "react";
import PropTypes from "prop-types";
import FoldableCard from "./FoldableCard";

function Cards({ cardsData }) {
  const [openedId, setOpenedId] = useState(0);
  return (
    <div className="cards">
      {cardsData.map((cardData) => {
        const { id, title, content } = cardData;
        return (
          <FoldableCard
            key={id}
            title={title}
            content={content}
            opened={openedId === id}
            onToggleOpened={() => {
              setOpenedId(id);
            }}
          />
        );
      })}
    </div>
  );
}

Cards.propTypes = {
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
};

export default Cards;
