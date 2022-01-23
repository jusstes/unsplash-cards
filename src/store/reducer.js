import types from './types';

const initialState = {
  cards: [],
};

// eslint-disable-next-line no-unused-vars, default-param-last
const cardsReducer = (state = [], action) => action.payload;

// eslint-disable-next-line default-param-last
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CARDS:
      return {
        ...state,
        cards: cardsReducer(state.cards, action),
      };

    default:
      return state;
  }
};

export default rootReducer;
