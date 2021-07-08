import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import App from './App';

import 'react-toastify/dist/ReactToastify.css';
import './scss/app.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <ToastContainer position="bottom-center" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
