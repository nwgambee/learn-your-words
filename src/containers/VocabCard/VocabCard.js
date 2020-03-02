import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToList } from '../../actions/index';
import './VocabCard.scss';
import PropTypes from 'prop-types';

export class VocabCard extends Component {
    constructor() {
        super();
        this.state = {disabledButton: false}
     }
     addToList = () => {
         if (!this.props.vocabList.includes(this.props.wordDetails)) {
            this.props.addToVocabList(this.props.wordDetails)
            this.setState({disabledButton: true})
         }
    }
    enableButton = () => {
        this.setState({disabledButton: false})
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
                 <button disabled={this.state.disabledButton} className='add-to-list-btn' onClick={() => this.addToList()}>Add To Vocab List</button>
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
