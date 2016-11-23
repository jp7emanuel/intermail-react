import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Product from './components/Product';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={Product} />
      </Route>
    </Router>
), document.getElementById('root'));
