import React from 'react';
import Card from '../../components/Card/Card';
import EmptyCardComponent from '../../components/EmptyCardComponent/EmptyCardComponent';

function CardsContainer({
  cards,
  handleDeleteCard,
  handleLikeCard,
  isLikedCards,
  likedCards,
}) {
  const visibleCards = isLikedCards ? likedCards : cards;

  return (
    <ul className="cards">
      {visibleCards.length ? (
        visibleCards.map((card) => (
          <Card
            card={card}
            key={card.id}
            handleDeleteCard={handleDeleteCard}
            handleLikeCard={handleLikeCard}
            isLikedCards={isLikedCards}
            isLikedCard={likedCards.includes(card)}
          />
        ))
      ) : (
        <EmptyCardComponent />
      )}
    </ul>
  );
}

export default CardsContainer;
