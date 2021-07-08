import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Logo from '../assets/logo.svg';

const Header = () => {
  const [isResponsiveMenu, setIsResponsiveMenu] = useState(false);
  const handleClick = () => setIsResponsiveMenu(!isResponsiveMenu);

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={Logo} alt="Housen" />
          </Link>
        </div>
        <nav className={`header__nav ${isResponsiveMenu ? 'header__nav--active' : ''}`}>
          <ul>
            <li>
              <NavLink onClick={handleClick} to="/buy">
                Buy a house
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/rent">
                Rent a house
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/mortgage">
                Mortgage
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/signup">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__call2action">
          <NavLink to="/signup" className="btn btn--main--outline">
            Sign Up
          </NavLink>
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
