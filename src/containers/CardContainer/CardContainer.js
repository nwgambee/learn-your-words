import React, { Component } from 'react';
import { connect } from 'react-redux';
import VocabCard from '../VocabCard/VocabCard'

const CardContainer = (wordDetails) => {
    console.log(wordDetails)
    return (
        <section className='card-container'>
            <VocabCard />
        </section>
    )
}

export default CardContainer;