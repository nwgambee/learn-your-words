import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../CardContainer/CardContainer';

class VocabCard extends Component {
    constructor() {
        super();
     }
     addToList = () => {
        console.log(this.props.wordDetails)
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

const mapDispatchToProps = dispatch => ({
    
})

export default connect(null, mapDispatchToProps)(VocabCard);
