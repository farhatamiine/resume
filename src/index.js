import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/styles/styles.css';
import configureStore from './redux/configureStore';

ReactDOM.render(
  <ReduxProvider store={configureStore}>
    <BrowserRouter>
      <StrictMode>
        <ColorModeScript />
        <App />
      </StrictMode>
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('root')
);
