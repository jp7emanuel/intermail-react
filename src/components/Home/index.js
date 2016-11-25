import React, { Component } from 'react';
import ProductList from '../Product/list';
import list from '../../../server/products.json';
import _ from 'lodash';

const productList = _.reverse(list.products);

const styles = {
  btnWarning: {
    width: '100%'
  },
  row: {
    marginBottom: '3em'
  }
}

class Home extends Component {
  render() {
    return (
      <div className="container">
        <legend>
          <h1>React</h1>
        </legend>
        <div className="row" style={styles.row}>
          <div className="col-xs-12">
            <ProductList list={productList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
