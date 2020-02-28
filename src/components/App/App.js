import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import SearchForm  from '../../containers/SearchForm/SearchForm.js'
import CardContainer from '../../containers/CardContainer/CardContainer'

export class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {

  }
  render() {
    return(
      <main className='main'>
        <SearchForm />
        <CardContainer />
      </main>
    )
  }
}

export default App;
