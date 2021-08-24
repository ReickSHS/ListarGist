import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';



const moduleNodo = document.getElementById('root');
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: purple
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  mountNode
);