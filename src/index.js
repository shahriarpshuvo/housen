import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './scss/app.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="bottom-center"
      autoClose={500000}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      pauseOnFocusLoss
    />
  </React.StrictMode>,
  document.getElementById('root')
);
