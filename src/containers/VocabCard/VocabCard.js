import React, { Component } from 'react';

const VocabCard = ({ wordDetails }) => {
    console.log(wordDetails)
    // console.log(wordDetails.wordDetails.searchedWordDetails);

    if (wordDetails) {
        const { word } = wordDetails
        const definition = wordDetails.results[0].definition
        const partOfSpeech = wordDetails.results[0].partOfSpeech
        return (
         <section className='vocab-card'>
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

export default VocabCard;