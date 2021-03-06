import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SearchForm  from '../../containers/SearchForm/SearchForm.js'
import CardContainer from '../../containers/CardContainer/CardContainer'
import Header from '../Header/Header'
import VocabList from '../../containers/VocabList/VocabList'
import PracticeCards from '../../containers/PracticeCards/PracticeCards'

const App = () => {
    return(
      <main className='main'>
        <Header />
        <Route
              exact path='/'
              render={() => <SearchForm />}
            />
        <Route
              exact path='/'
              render={() => <CardContainer />}
            />
        <Route
              path='/vocab-list'
              render={() => <VocabList />}
            />
        <Route
              path='/practice'
              render={() => <PracticeCards />}
            />
      </main>
    )
  }

export default App;
