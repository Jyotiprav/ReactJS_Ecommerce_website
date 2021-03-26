import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import {ProductProvider} from './context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // Context provides a way to pass data through the component tree without having to pass props down manually at every level.
  <ProductProvider>
    <Router>
        <App />
    </Router>
  </ProductProvider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
