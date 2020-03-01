import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVocabWord } from '../../actions/index'
// import PropTypes from 'prop-types';
import { searchVocabWord } from '../../apiCalls/apiCalls'
import './SearchForm.scss'

class SearchForm extends Component {
    constructor() {
        super();
        this.state = { query: '', error: ''};
     }
     handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
     }
     handleError = () => {
        this.setState({query: '', error: 'Sorry, we were not able to find a definition for that word. Make sure your spelling is correct!'})
     }
     handleSubmit = async (e) => {
         e.preventDefault();
         try {
             const result = await searchVocabWord(this.state.query)
             this.props.getVocabWord(result)
             this.setState({query: '', error: ''})
        }
        catch (e) {
            this.handleError()
            this.setState({query:''});
        }
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
                    <p className='error-message'>{this.state.error}</p>
             </form>
         )
     }
}

export const mapDispatchToProps = dispatch => ({
    getVocabWord: (query) => dispatch(getVocabWord(query))
  })

export default connect(null, mapDispatchToProps)(SearchForm);
