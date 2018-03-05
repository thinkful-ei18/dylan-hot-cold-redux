import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';
import {connect} from 'react-redux';
import * as actions from '../actions';

// export class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userGuesses: [],
//       feedback: 'Make Your Guess!',
//       answer: Math.floor(Math.random() * 100)
//     };
//   }

//   handleValidationErrors(value) {
//     let error = new Error();
//     if (isNaN(value)) error.message = 'Input must be a number';
//     if (this.state.userGuesses.find(item => item === value)) {
//       error.message = 'You have already guessed that number';
//     }
//     if (this.state.userGuesses.find(item => item === this.state.answer)) {
//       error.message = 'You have already won, start a new game';
//     }
//     if (error.message) throw error;
//   }

//   generateGoodFeedback(value) {
//     const distanceRounded = Math.ceil(Math.abs(value - this.state.answer) / 10) * 10 > 40 ? 50 : Math.ceil(Math.abs(value - this.state.answer) / 10) * 10;
//     const feedbackObj = { 0: 'You Win!', 10: 'Hot', 20: 'Warm', 30: 'Chilly', 40: 'Cold', 50: 'Horrible' };
//     return feedbackObj[distanceRounded]
//   }

//   newGame() {
//     this.setState({
//       userGuesses: [],
//       feedback: 'Make Your Guess!',
//       answer: Math.floor(Math.random() * 100)
//     });
//     document.getElementById('userGuess').value = '';
//   }

//   makeGuess(value) {
//     let feedback;
//     try {
//       this.handleValidationErrors(value);
//     } catch (err) {
//       feedback = err.message;
//       return this.setState({ feedback });
//     }
//     feedback = this.generateGoodFeedback(value);
//     this.setState({
//       userGuesses: [...this.state.userGuesses, value],
//       feedback: feedback
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Header newGame={() => this.newGame()} />
//         <GuessSection
//           feedback={this.state.feedback}
//           onSubmit={value => this.makeGuess(parseInt(value, 10))}
//         />
//         <GuessCount count={this.state.userGuesses.length + 1} />
//         <GuessList guesses={this.state.userGuesses} />
//       </div>
//     );
//   }
// }


export function Game(props) {

  const handleValidationErrors = value => {
    let error = new Error();
    if (isNaN(value)) error.message = 'Input must be a number';
    if (props.userGuesses.find(item => item === value)) {
      error.message = 'You have already guessed that number';
    }
    if (props.userGuesses.find(item => item === props.answer)) {
      error.message = 'You have already won, start a new game';
    }
    if (error.message) throw error;
  };

  const generateGoodFeedback = value => {
    const distanceRounded = Math.ceil(Math.abs(value - props.answer) / 10) * 10 > 40 ? 50 : Math.ceil(Math.abs(value - props.answer) / 10) * 10;
    const feedbackObj = { 0: 'You Win!', 10: 'Hot', 20: 'Warm', 30: 'Chilly', 40: 'Cold', 50: 'Horrible' };
    return feedbackObj[distanceRounded];
  };

  const newGame = () => {
    props.dispatch(actions.newGame());
    document.getElementById('userGuess').value = '';
  };

  const makeGuess = value => {
    let feedback;
    try {
      handleValidationErrors(value);
    } catch (err) {
      feedback = err.message;
      return props.dispatch(actions.addFeedback(feedback));
    }
    feedback = generateGoodFeedback(value);
    props.dispatch(actions.addGuess(value, feedback));
  };

  return <div>
      <Header newGame={() => newGame()} />
      <GuessSection feedback={props.feedback} onSubmit={value => makeGuess(parseInt(value, 10))} />
      <GuessCount count={props.userGuesses.length + 1} />
      <GuessList guesses={props.userGuesses} />
    </div>;
}

  

const mapStateToProps = state => ({
  answer: state.answer,
  feedback: state.feedback,
  userGuesses: state.userGuesses
});

export default connect(mapStateToProps)(Game);