import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';

import './index.css';
import App from './App';

// Used https://chir.ag/projects/name-that-color to determine the names of these colors
const theme = {
  colors: {
    elephant: '#0e2439',
    rockBlue: '#9cb3c9',
    amaranth: '#e6375a',
    white: '#FFFFFF',
    blueDianne: '#26425f',
    cloudBurst: '#1f364d',
    periwinkleGray: '#B6CCE2',
    pictonBlue: '#4799eb',
    rhino: '#274059',
    firefly: '#0c1f31',
    thundora: '#404040',
    baliHai: '#809ab3'
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
