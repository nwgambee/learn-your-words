import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

export class SearchForm extends Component {
    constructor() {
        super();
        this.state = { query: ''};
     }
     componentDidMount() {

     }
     handleChange() {
        
     }
     render() {
        const { query } = this.state
         return(
             <form className='search-word-form'>
                 <input 
                    className='word-input'
                    type='text'
                    placeholder="Vocab Word"
                    name="word"
                    value={query}
                    onChange={this.handleChange}
                    />
             </form>
         )
     }
}