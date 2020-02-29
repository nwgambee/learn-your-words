import React, { Component } from 'react';
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <button className='home-btn'>Home</button>
      <h1 className='main-title'>Learn Your Words</h1>
      <button className='vocab-list-btn'>View Vocab List</button>
    </header>
  )
}

export default Header;