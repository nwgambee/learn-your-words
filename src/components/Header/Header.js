import React, { Component } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='header'>
      <button className='home-btn'>Home</button>
      <h1 className='main-title'>Learn Your Words</h1>
      <Link className='vocab-list-btn' to={'/vocab-list'}>View Vocab List</Link>
    </header>
  )
}

export default Header;