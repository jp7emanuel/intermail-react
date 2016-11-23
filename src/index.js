import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import ProductList from './components/ProductList';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={ProductList} />
      </Route>
    </Router>
), document.getElementById('root'));
