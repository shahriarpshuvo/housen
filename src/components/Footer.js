/*eslint-disable*/
import React from 'react';

const Footer = () => (
  <footer class="footer meta meta--caption">
    <div className="container">
      <div className="footer__copyright">
        <p>Housen &copy; {new Date().getFullYear()}</p>
      </div>
      <nav className="footer__nav">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
