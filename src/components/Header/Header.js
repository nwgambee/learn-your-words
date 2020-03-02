import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='header'>
      <Link to={'/practice'} className='practice-btn'>Practice!</Link>
      <Link to={'/'} className='main-title'>Learn Your Words</Link>
      <Link className='vocab-list-btn' to={'/vocab-list'}>Vocab List</Link>
    </header>
  )
}

export default Header;