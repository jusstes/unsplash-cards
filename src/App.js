import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cardsSelector from './store/selectors';
import setCards from './store/actions';
import fetchCards from './utils/utils';
import CardsContainer from './containers/CardsContainer/CardsContainer';
import Filter from './components/Filter/Filter';

function App() {
  const [likedCards, setLikedCards] = React.useState([]);
  const [isLikedCards, setIsLikedCards] = React.useState(false);

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

  return (
    <>
      <Filter setIsLikedCards={setIsLikedCards} isLikedCards={isLikedCards} />
      <CardsContainer
        cards={cards}
        likedCards={likedCards}
        isLikedCards={isLikedCards}
        handleDeleteCard={handleDeleteCard}
        handleLikeCard={handleLikeCard}
      />
    </>
  );
}

export default App;
