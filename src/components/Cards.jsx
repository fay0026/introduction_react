import { React, useState } from "react";
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

export default Cards;
