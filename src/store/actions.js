import types from './types';

const setCards = (cards) => {
  return {
    type: types.CARDS,
    payload: cards,
  };
};

export default setCards;
