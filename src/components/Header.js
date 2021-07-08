/* eslint-disable */
import React, { useState } from 'react';
import Logo from '../assets/logo.svg';

const Header = () => {
  const [isResponsiveMenu, setIsResponsiveMenu] = useState(false);

  const handleClick = () => setIsResponsiveMenu(!isResponsiveMenu);

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <a href="#">
            <img src={Logo} alt="Housen" />
          </a>
        </div>
        <nav className={`header__nav ${isResponsiveMenu ? 'header__nav--active' : ''}`}>
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
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </nav>
        <div className="header__call2action">
          <a href="#" className="btn btn--main--outline">
            Sign Up
          </a>
        </div>
        <button
          onClick={handleClick}
          className={`header__responsiveMenu ${isResponsiveMenu ? 'header__responsiveMenu--active' : ''}`}
        >
          Menu
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
