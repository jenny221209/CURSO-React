import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

// Componentes NC 
import PageInicio from 'views/pages/Page-Incicio-1';
import PageMenu from 'views/pages/Page-Menu';

var hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <Switch>
        <Route path='/page-menu' component={PageMenu} />
        <Route path='/' component={PageInicio} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
