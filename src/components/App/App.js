import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import SearchForm  from '../../containers/SearchForm/SearchForm.js'

export class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {

  }
  render() {
    return(
      <SearchForm />
    )
  }
}

export default App;
