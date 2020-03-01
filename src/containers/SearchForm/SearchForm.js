import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVocabWord } from '../../actions/index'
// import PropTypes from 'prop-types';
import { searchVocabWord } from '../../apiCalls/apiCalls'
import './SearchForm.scss'

class SearchForm extends Component {
    constructor() {
        super();
        this.state = { query: ''};
     }
     handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
     }
     handleError = () => {
         console.log('error');
     }
     handleSubmit = async (e) => {
         e.preventDefault();
         try {
             const result = await searchVocabWord(this.state.query)
             this.props.getVocabWord(result)
        }
        catch (e) {
            this.handleError()
        }
        this.setState({query:''});
     }
     render() {
        const { query } = this.state
         return(
             <form className='search-word-form' onSubmit={this.handleSubmit} autoComplete='off'>
                 <input 
                    className='word-input'
                    type='text'
                    placeholder="Vocab Word"
                    name="query"
                    value={query}
                    onChange={this.handleChange}
                    />
                    <button className='submit-btn' >Find Vocab Word</button>
             </form>
         )
     }
}

export const mapDispatchToProps = dispatch => ({
    getVocabWord: (query) => dispatch(getVocabWord(query))
  })

export default connect(null, mapDispatchToProps)(SearchForm);
