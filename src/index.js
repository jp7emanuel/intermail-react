import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './components/Home';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={Home} />
      </Route>
    </Router>
), document.getElementById('root'));
