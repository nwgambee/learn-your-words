import React from 'react';
import './App.css';
import SearchForm  from '../../containers/SearchForm/SearchForm.js'
import CardContainer from '../../containers/CardContainer/CardContainer'

const App = () => {
    return(
      <main className='main'>
        <SearchForm />
        <CardContainer />
      </main>
    )
  }

export default App;
