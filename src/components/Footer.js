/*eslint-disable*/
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="footer meta meta--caption">
    <div className="container">
      <div className="footer__copyright">
        <p>Housen &copy; {new Date().getFullYear()}</p>
      </div>
      <nav className="footer__nav">
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/terms">Terms &amp; Conditions</NavLink>
          </li>
          <li>
            <NavLink to="/privacy">Privacy Policy</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
