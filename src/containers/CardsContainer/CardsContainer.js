import React from 'react';
import Card from '../../components/Card/Card';
import EmptyCardComponent from '../../components/EmptyCardComponent/EmptyCardComponent';

function CardsContainer({ cards }) {
  console.log(cards);
  return (
    <ul>
      {cards.length ? (
        cards.map((card) => <Card card={card} key={card.id} />)
      ) : (
        <EmptyCardComponent />
      )}
    </ul>
  );
}

export default CardsContainer;
