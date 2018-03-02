import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import Game from './components/game';
import store from './store';
import * as actions from './actions';

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

store.dispatch(actions.addGuess(22, 'Warm'));
console.log(store.getState());

store.dispatch(actions.addFeedback('Ew'));
console.log(store.getState());

store.dispatch(actions.newGame());
console.log(store.getState());