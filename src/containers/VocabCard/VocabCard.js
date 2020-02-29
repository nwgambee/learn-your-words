import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToList } from '../../actions/index'

class VocabCard extends Component {
    constructor() {
        super();
     }
     addToList = () => {
         // this is not working properly, duplicates can still be added for some reason
         if (!this.props.vocabList.includes(this.props.wordDetails)) {
            this.props.addToVocabList(this.props.wordDetails)
         }
    }
     render() {
        if (this.props.wordDetails) {
            const { word } = this.props.wordDetails
            const definition = this.props.wordDetails.results[0].definition
            const partOfSpeech = this.props.wordDetails.results[0].partOfSpeech
            return (
             <section className='vocab-card' id={`${word}-card`}>
                 <button className='add-to-list-btn' onClick={() => this.addToList()}>+</button>
                <h1>{word}</h1>
                <h2> {definition} </h2>
                <h2> {partOfSpeech} </h2>
             </section>
            )
        } else {
            return(
                null
            )
        }
     }

}

export const mapDispatchToProps = dispatch => ({
    addToVocabList: (word) => dispatch(addToList(word))
})

export const mapStateToProps = state => ({
    vocabList: state.vocabList
})

export default connect(mapStateToProps, mapDispatchToProps)(VocabCard);
