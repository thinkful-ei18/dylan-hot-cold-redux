export const ADD_GUESS = 'ADD_GUESS'
export const NEW_GAME = 'NEW_GAME'
export const ADD_FEEDBACK = 'ADD_FEEDBACK';

export const addGuess = (guess, feedback) => ({
  type: ADD_GUESS,
  guess,
  feedback
});

export const newGame = () => ({
  type: NEW_GAME
});

export const addFeedback = (feedback) => ({
  type: ADD_FEEDBACK,
  feedback
});