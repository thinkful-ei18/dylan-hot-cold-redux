import * as actions from '../actions';

const initialState = {
  userGuesses: [],
  feedback: 'Make Your Guess!',
  answer: Math.floor(Math.random() * 100)
};

export const gameReducer = (state = initialState, action) => {
  if (action.type === actions.ADD_GUESS) {
    return Object.assign({}, state, {
      userGuesses: [...state.userGuesses, action.guess],
      feedback: action.feedback
    });
  } else if (action.type === actions.NEW_GAME) {
    return Object.assign({}, initialState, {
      answer: Math.floor(Math.random() * 100)
    });
  } else if (action.type === actions.ADD_FEEDBACK) {
    return Object.assign({}, state, { feedback: action.feedback });
  }
  return state;
};
