import React, { Component } from 'react';
import { connect } from 'react-redux';


class VocabList extends Component {
  constructor() {
    super();
 }

 render() {
   let listCards = this.props.vocabList.map(word => {
     return <section className='list-card'>
              <button className='remove-from-list-btn'>-</button>
              <h1>{word.word}</h1>
              <h3>{word.results[0].definition}</h3>
              <h3>{word.results[0].partOfSpeech}</h3>
            </section>
   })
   return (
    <section className='list-container'>
      {listCards}
    </section>
   )
 }
}

export const mapStateToProps = state => ({
  vocabList: state.vocabList
})



export default connect(mapStateToProps, null)(VocabList);
