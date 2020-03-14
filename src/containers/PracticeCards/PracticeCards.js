import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PracticeCards.scss'
import PropTypes from 'prop-types';

export class PracticeCards extends Component {
  constructor() {
    super();
    this.state = {guess: '', correctlyGuessedWords: [], incorrectlyGuessedWords: []}
 }

 handleChange = e => {
   this.setState({ [e.target.name]: e.target.value })
 }

 shuffleList(array) {
   if(this.state.guess !== '' ){
     return this.props.vocabList;
   } else {
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
}
checkGuess = (word) => {
  if(this.state.guess.toLowerCase() === word.toLowerCase()) {
    this.setState({ guess: '', correctlyGuessedWords: [...this.state.correctlyGuessedWords, word.toLowerCase()]})

  } else {
    console.log('incorrect guess');
    this.setState({ guess: '', correctlyGuessedWords: [...this.state.correctlyGuessedWords], incorrectlyGuessedWords: [...this.state.incorrectlyGuessedWords, word.toLowerCase()]})
    console.log(this.state)
  }
}
  checkContents = () => {
    if (this.props.vocabList.length > 0 ) {
      return 'hidden';
    } else {
      return 'visible';
    }
  }

 render() {
    let shuffledList = this.shuffleList(this.props.vocabList);
    let cards = shuffledList.map(word => {
      if(this.state.correctlyGuessedWords.includes(word.word.toLowerCase())) {
        return (
          <section className='list-card' key={word.word}>
            <h2 className='correct-message'>Good job!</h2>
            <h1 className='list-word-h1'> {word.word}</h1>
            <h2 className='list-definition'>{word.results[0].definition}</h2>
            <h2 className='list-part-of'>{word.results[0].partOfSpeech}</h2>
          </section> 
        )  
      } else if (this.state.incorrectlyGuessedWords.includes(word.word.toLowerCase())) {
        return (
          <section className='list-card' key={word.word}>
            <h2>Incorrect, guess again!</h2>
            <input className='list-word-input'
             type='text'
             placeholder='Word'
             name={`guess`}
             onChange={this.handleChange}
             autoComplete='off'
            />
            <button className='check-guess' onClick={() => this.checkGuess(word.word)}>Check Guess</button>
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
               autoComplete='off'
              />
              <button className='check-guess' onClick={() => this.checkGuess(word.word)}>Check Guess</button>
              <h2 className='list-definition'>{word.results[0].definition}</h2>
              <h2 className='list-part-of'>{word.results[0].partOfSpeech}</h2>
            </section> 
 
    )
  })

   return (
     <section className='list-container'>
       <h1 className={`${this.checkContents()} empty-message`}>Add some words to your vocab list to practice them!</h1>
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