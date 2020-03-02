import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PracticeCards.scss'
import PropTypes from 'prop-types';

export class PracticeCards extends Component {
  constructor() {
    super();
 }

 render() {
   return (
     <section className='practice-container'>
       <h1>Practice!</h1>
     </section>
   )
 }
}

export const mapStateToProps = state => ({
  vocabList: state.vocabList
})

export default connect(mapStateToProps)(PracticeCards)