/* eslint-disable */
import React from 'react';
import Logo from '../assets/logo.svg';

const Header = () => (
  <header class="header">
    <div className="container">
      <div className="header__logo">
        <a href="#">
          <img src={Logo} alt="Housen" />
        </a>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="#">Buy a house</a>
          </li>
          <li>
            <a href="#">Rent a house</a>
          </li>
          <li>
            <a href="#">Mortgage</a>
          </li>
        </ul>
      </nav>
      <div className="header__call2action">
        <a href="#" class="btn btn--main--outline">
          Sign Up
        </a>
      </div>
    </div>
  </header>
);

export default Header;
