import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";


// Rutas
import Sectionheader from 'views/pages/PageFood-Burguer-01';

var hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
   <Router history={hist}>
    <Switch>
      <Route path='/' component={Sectionheader} />
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
