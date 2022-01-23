import React from 'react';
import CardsContainer from './containers/CardsContainer/CardsContainer';
import Filter from './components/Filter/Filter';

function App() {
  const [isLikedCards, setIsLikedCards] = React.useState(false);

  return (
    <>
      <Filter setIsLikedCards={setIsLikedCards} isLikedCards={isLikedCards} />
      <CardsContainer isLikedCards={isLikedCards} />
    </>
  );
}

export default App;
