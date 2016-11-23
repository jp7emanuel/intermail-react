import React, { Component } from 'react';
import Product from '../Product';
import list from '../../../server/products.json';

class ProductList extends Component {

  render() {
    const productsListRendered = list.products.map( (product, i) => {
        return (
          <Product informations={product} key={i} />
        );
    });

    return (
      <div className="container">
        <legend><h1>React</h1></legend>
        <div className="row">
          <div className="col-xs-12">
            { productsListRendered }
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
