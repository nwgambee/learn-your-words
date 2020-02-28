import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import SearchForm  from '../../containers/SearchForm/SearchForm.js'
import CardContainer from '../../containers/CardContainer/CardContainer'

const App = (props) => {
    return(
      <main className='main'>
        <SearchForm />
        <CardContainer wordDetails={props.searchedWordDetails}/>
      </main>
    )
  }

export const mapStateToProps = (state) => ({
  searchedWordDetails: state.searchedWord
})

export default connect(mapStateToProps)(App)
