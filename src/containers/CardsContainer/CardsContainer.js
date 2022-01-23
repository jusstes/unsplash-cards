import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import EmptyCardComponent from '../../components/EmptyCardComponent/EmptyCardComponent';
import cardsSelector from '../../store/selectors';
import fetchCards from '../../utils/utils';
import setCards from '../../store/actions';

function CardsContainer({ isLikedCards }) {
  const [likedCards, setLikedCards] = React.useState([]);

  const dispatch = useDispatch();
  const cards = useSelector(cardsSelector);

  React.useEffect(() => {
    fetchCards().then((data) => dispatch(setCards(data)));
  }, [dispatch]);

  const handleDeleteCard = (card) => {
    const allNewLikedCards = likedCards.filter((item) => item.id !== card.id);
    setLikedCards(allNewLikedCards);

    const allNewCards = cards.filter((item) => item.id !== card.id);
    dispatch(setCards(allNewCards));
  };

  const handleLikeCard = (card) => {
    if (likedCards.includes(card)) {
      setLikedCards(likedCards.filter((item) => item.id !== card.id));
    } else {
      setLikedCards([...likedCards, card]);
    }
  };

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
