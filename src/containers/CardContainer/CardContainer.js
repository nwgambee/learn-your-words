import React, { Component } from 'react';
import { connect } from 'react-redux';
import VocabCard from '../VocabCard/VocabCard'

const CardContainer = (props) => {
    return (
        <section className='card-container'>
            <VocabCard wordDetails={props.searchedWordDetails}/>
        </section>
    )
}

export const mapStateToProps = (state) => ({
    searchedWordDetails: state.searchedWord
  })
  
export default connect(mapStateToProps)(CardContainer)