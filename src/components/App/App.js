import React from 'react';
import './App.css';
import SearchForm  from '../../containers/SearchForm/SearchForm.js'
import CardContainer from '../../containers/CardContainer/CardContainer'
import Header from '../Header/Header'

const App = () => {
    return(
      <main className='main'>
        <Header />
        <SearchForm />
        <CardContainer />
      </main>
    )
  }

export default App;
