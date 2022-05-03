import React from 'react';
import { render } from 'react-dom';
//bring in Router so the entire app has access to routes
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
