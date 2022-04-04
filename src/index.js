import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './Components/App';
import { GlobalStyle } from './GlobalStyle.styled';
import '../node_modules/modern-normalize/modern-normalize.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
