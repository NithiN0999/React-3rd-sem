// src/components/Header.js
import React from 'react';
import Login from './Login';

const Header = () => {
  return (
    <header>
      <h1>Food Ordering Website</h1>
      <nav>
        <ul>
          <Login/>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
