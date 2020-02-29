import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SearchForm  from '../../containers/SearchForm/SearchForm.js'
import CardContainer from '../../containers/CardContainer/CardContainer'
import Header from '../Header/Header'
import VocabList from '../../containers/VocabList/VocabList'

const App = () => {
    return(
      <main className='main'>
        <Header />
        <Route
              exact path='/'
              render={() => <SearchForm />}
            />
        <CardContainer />
        <Route
              path='/vocab-list'
              render={() => <VocabList />}
            />
      </main>
    )
  }

export default App;
