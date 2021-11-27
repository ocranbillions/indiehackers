import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';

import './index.css';
import App from './components/App';

// Used https://chir.ag/projects/name-that-color to determine the names of these colors
const theme = {
  colors: {
    elephant: '#0e2439',
    rockBlue: '#9cb3c9',
    amaranth: '#e6375a',
    white: '#FFFFFF',
    blueDianne: '#26425f',
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
