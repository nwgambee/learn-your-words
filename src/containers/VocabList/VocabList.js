import React, { Component } from 'react';
import { connect } from 'react-redux';
import './VocabList.scss'
import { removeFromList } from '../../actions/index'
import PropTypes from 'prop-types';


export class VocabList extends Component {
  constructor() {
    super();
 }

 render() {
   let listCards = this.props.vocabList.map(word => {
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
      {listCards}
    </section>
   )
 }
}

export const mapStateToProps = state => ({
  vocabList: state.vocabList
})

export const mapDispatchToProps = dispatch => ({
  removeFromList: (id) => dispatch(removeFromList(id))
})



export default connect(mapStateToProps, mapDispatchToProps)(VocabList);

VocabList.propTypes = {
  vocabList: PropTypes.array,
  removeFromList: PropTypes.func
}
