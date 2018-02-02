import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser}) => {
  return (
    <header className="main-header">
      <nav className="main-navbar">
        <ul className="header-list">
          <li><a href="#/navbar">Nimbus</a></li>
          <li><a href="#/navbar">Home</a></li>
          <li><a href="#/navbar">Collection</a></li>
        </ul>
        <form id="search-form">
          <input id="search-box" placeholder="Search"></input>
        </form>
        <ul className="header-list">
          <li><a href="#/navbar">Upgrade</a></li>
          <li><a href="#/navbar">Upload</a></li>
          <li><a href="#/navbar">Alex Kite</a></li>
        </ul>
      </nav>
    </header>

  );
};

export default NavBar;
