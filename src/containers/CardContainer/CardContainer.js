import React, { Component } from 'react';
import { connect } from 'react-redux';
import VocabCard from '../VocabCard/VocabCard'

const CardContainer = () => {
    return (
        <section className='card-container'>
            <VocabCard />
        </section>
    )
}

export default CardContainer;