import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter} from 'react-router-dom'
import App from 'components/App';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
      <MuiThemeProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
      </MuiThemeProvider>
        , document.getElementById('root'));
});