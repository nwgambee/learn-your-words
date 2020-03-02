import React, { Component } from 'react';
import { connect } from 'react-redux';
import VocabCard from '../VocabCard/VocabCard'
import './CardContainer.scss'
import PropTypes from 'prop-types'

 export const CardContainer = (props) => {
    return (
        <section className='card-container'>
            <VocabCard wordDetails={props.searchedWordDetails}/>
        </section>
    )
}

export const mapStateToProps = (state) => ({
    searchedWordDetails: state.searchedWord,
    vocabList: state.vocabList
  })
  
export default connect(mapStateToProps)(CardContainer)

CardContainer.propTypes = {
    // searchedWordDetails: PropTypes.object,
    vocabList: PropTypes.array
}