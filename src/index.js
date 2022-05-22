import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './styles/styles.scss';

ReactDOM.render(
    <BrowserRouter className='auth_anchoMax container-fluid'>
      <App />
    </BrowserRouter>
    
  ,
  document.getElementById('root')
);


