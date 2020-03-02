import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PracticeCards.scss'
import PropTypes from 'prop-types';

export class PracticeCards extends Component {
  constructor() {
    super();
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

 render() {
   // render these cards with an input to replace .list-word-h1. Add a button to check answer. 
  //  When that is clicked, run helper function to check if the typed word matches the underlying word (maybe use id property of word.word and check against that).
  // if check is successful, uncover h1 to reveal correct answer. Prompt 'incorrect guess' message otherwise
   let shuffledList = this.shuffleList(this.props.vocabList);
   let cards = shuffledList.map(word => {
    return (
           <section className='list-card' key={word.word}>
             <h1 className='list-word-h1'>{word.word}</h1>
             <h2 className='list-definition'>{word.results[0].definition}</h2>
             <h2 className='list-part-of'>{word.results[0].partOfSpeech}</h2>
             <button className='remove-from-list-btn' onClick={() => this.props.removeFromList(word.word)}>Remove From List</button>
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