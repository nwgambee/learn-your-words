import React, { Component } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='header'>
      <button className='home-btn'>Home</button>
      <Link to={'/'} className='main-title'>Learn Your Words</Link>
      <Link className='vocab-list-btn' to={'/vocab-list'}>Vocab List</Link>
    </header>
  )
}

export default Header;