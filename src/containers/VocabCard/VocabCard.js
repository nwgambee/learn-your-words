import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToList } from '../../actions/index';
import './VocabCard.scss';
import PropTypes from 'prop-types';

export class VocabCard extends Component {
    constructor() {
        super();
        // this.state = {disabled: false}
     }
     addToList = () => {
         if (!this.props.vocabList.includes(this.props.wordDetails)) {
            this.props.addToVocabList(this.props.wordDetails)
            // this.setState({disabled: true})
         }
    }
    checkIfInVocabList = (currentWord) => {
        let list = this.props.vocabList
        for (var i = 0; i < list.length; i++) {
            if (list[i].word === currentWord) {
                return true;
            } 
        }
    }
     render() {
         if (this.props.wordDetails) {
            const { word } = this.props.wordDetails
            const definition = this.props.wordDetails.results[0].definition
            const partOfSpeech = this.props.wordDetails.results[0].partOfSpeech
            return (
             <section className='vocab-card' id={`${word}-card`}>
                <h1 className='word-h1' >{word}</h1>
                <h2 className='definition'> {definition} </h2>
                <h2 className='part-of-speech'>{partOfSpeech} </h2>
                 <button disabled={this.checkIfInVocabList(word)} onClick={() => this.addToList()} className={this.checkIfInVocabList(word) ? 'disabled add-to-list-btn' : 'add-to-list-btn'} >Add To Vocab List</button>
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

VocabCard.propTypes = {
    addToVocabList: PropTypes.func,
    vocabList: PropTypes.array
}
