import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Quotes from './container/Quotes/Quotes';
import './index.css';
import reportWebVitals from './reportWebVitals';

axios.defaults.baseURL = 'https://js-react-node-default-rtdb.firebaseio.com';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Quotes />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
