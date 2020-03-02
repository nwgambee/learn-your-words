import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PracticeCards.scss'
import PropTypes from 'prop-types';

export class PracticeCards extends Component {
  constructor() {
    super();
    this.state = {guess: '', correctlyGuessedWords: []}
 }

 handleChange = e => {
   this.setState({ [e.target.name]: e.target.value })
 }

 shuffleList(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
checkGuess = (word, e) => {
  if(this.state.guess.toLowerCase() === word.toLowerCase()) {
    this.setState({ guess: '', correctlyGuessedWords: [...this.state.correctlyGuessedWords, word.toLowerCase()]})

  } else {
    console.log('incorrect guess');
    // prompt 'incorrect guess' message
  }
}

 render() {
    let shuffledList = this.shuffleList(this.props.vocabList);
    let cards = shuffledList.map(word => {
      if(this.state.correctlyGuessedWords.includes(word.word.toLowerCase())) {
        return (
          <section className='list-card' key={word.word}>
            <h1 className='list-word-input'> {word.word}</h1>
            <h2 className='list-definition'>{word.results[0].definition}</h2>
            <h2 className='list-part-of'>{word.results[0].partOfSpeech}</h2>
          </section> 
        )  
      } 
     return (
            <section className='list-card' key={word.word}>
              <input className='list-word-input'
               type='text'
               placeholder='Word'
               name={`guess`}
               onChange={this.handleChange}
              />
              <button className='check-guess' onClick={(e) => this.checkGuess(word.word, e)}>Check Guess</button>
              <h2 className='list-definition'>{word.results[0].definition}</h2>
              <h2 className='list-part-of'>{word.results[0].partOfSpeech}</h2>
            </section> 
 
    )
  })

   return (
     <section className='list-container'>
       {cards}
     </section>
   )
 }
} 

export const mapStateToProps = state => ({
  vocabList: state.vocabList
})

export default connect(mapStateToProps)(PracticeCards)

PracticeCards.propTypes = {
  vocabList: PropTypes.array
}