import React from 'react';

function Card({
  card,
  handleDeleteCard,
  handleLikeCard,
  isLikedCards,
  isLikedCard,
}) {
  const handleCardLike = () => {
    handleLikeCard(card);
  };

  const handleCardDelete = () => {
    handleDeleteCard(card);
  };

  return (
    <li className="card">
      <button
        type="button"
        onClick={handleCardLike}
        className={`card__like ${
          isLikedCard ? 'card__like_active' : ''
        } card__svg`}
        title="Лайкнуть фотографию"
      />
      {!isLikedCards ? (
        <button
          type="button"
          onClick={handleCardDelete}
          className="card__delete card__svg"
          title="Удалить фотографию"
        />
      ) : null}
      <img
        className="card__image"
        src={card.urls?.small}
        alt={card.alt_description}
        id={card.id}
      />
      <p className="card__author">Photographer: {card.user?.name}</p>
    </li>
  );
}

export default Card;
