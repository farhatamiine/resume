import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/styles/styles.css';

ReactDOM.render(
  <BrowserRouter>
    <StrictMode>
      <ColorModeScript />
      <App />
    </StrictMode>
  </BrowserRouter>,

  document.getElementById('root')
);
