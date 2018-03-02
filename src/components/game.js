import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userGuesses: [],
      feedback: 'Make Your Guess!',
      answer: Math.floor(Math.random() * 100)
    };
  }

  handleValidationErrors(value) {
    let error = new Error();
    if (isNaN(value)) error.message = 'Input must be a number';
    if (this.state.userGuesses.find(item => item === value)) {
      error.message = 'You have already guessed that number';
    }
    if (this.state.userGuesses.find(item => item === this.state.answer)) {
      error.message = 'You have already won, start a new game';
    }
    if (error.message) throw error;
  }

  generateGoodFeedback(value) {
    const distance = Math.abs(value - this.state.answer);
    if (distance === 0) {
      return 'You Win!';
    }
    if (distance < 15) {
      return 'Hot';
    }
    if (distance < 30 ) {
      return 'Warm';
    } 
    if (distance < 45) {
      return 'Cold';
    } else {
      return 'Horrible';
    }

    const distanceFeedback = {
      
    }
  }

  newGame() {
    this.setState({
      userGuesses: [],
      feedback: 'Make Your Guess!',
      answer: Math.floor(Math.random() * 100)
    });
    document.getElementById('userGuess').value = '';
  }

  makeGuess(value) {
    let feedback;
    try {
      this.handleValidationErrors(value);
    } catch (err) {
      feedback = err.message;
      return this.setState({ feedback });
    }
    feedback = this.generateGoodFeedback(value);
    this.setState({
      userGuesses: [...this.state.userGuesses, value],
      feedback: feedback
    });
  }

  render() {
    return (
      <div>
        <Header newGame={() => this.newGame()} />
        <GuessSection
          feedback={this.state.feedback}
          onSubmit={value => this.makeGuess(parseInt(value, 10))}
        />
        <GuessCount count={this.state.userGuesses.length + 1} />
        <GuessList guesses={this.state.userGuesses} />
      </div>
    );
  }
}
