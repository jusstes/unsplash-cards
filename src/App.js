import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cardsSelector from './store/selectors';
import setCards from './store/actions';
import fetchCards from './utils/utils';
import CardsContainer from './containers/CardsContainer/CardsContainer';

function App() {
  const dispatch = useDispatch();
  const cards = useSelector(cardsSelector);

  React.useEffect(() => {
    // fetchCards().then((data) => dispatch(setCards(data)));
    dispatch(setCards(fetchCards()));
  }, [dispatch]);

  return <CardsContainer cards={cards} />;
}

export default App;
