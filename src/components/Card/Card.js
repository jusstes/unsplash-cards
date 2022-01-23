import React from 'react';

function Card({ card }) {
  return (
    <li className="card">
      <img
        className="card__image"
        src={card.urls?.small}
        alt={card.alt_description}
      />
    </li>
  );
}

export default Card;
