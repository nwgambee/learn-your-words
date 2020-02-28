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
     handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
     }
     handleSubmit = (event) => {
         event.preventDefault();
        console.log(this.state)
     }
     render() {
        const { query } = this.state
         return(
             <form className='search-word-form'>
                 <input 
                    className='word-input'
                    type='text'
                    placeholder="Vocab Word"
                    name="query"
                    value={query}
                    onChange={this.handleChange}
                    />
                    <button className='submit-btn' onClick={() => this.handleSubmit()}>Find Vocab Word</button>
             </form>
         )
     }
}