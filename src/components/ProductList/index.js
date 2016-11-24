import React, { Component } from 'react';
import Product from '../Product';
import update from 'react-addons-update';
import _ from 'lodash';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list.products
    }
  }

  saveProduct(product) {
    // console.log(product);
    // var product = this;
    // this.setState({
    //   list: this.state.list.push(product)
    // });
  }

  deleteProduct(productId) {
    var index = this.state.list.findIndex(item => item._id === productId);
    this.setState({
      list: update(this.state.list, {
        $splice: [[index, 1]]
      })
    });
  }

  render() {
    const productsListRendered = this.state.list.map((product, i) => {
        return (
          <Product
            informations={product}
            key={product._id}
            save={this.saveProduct.bind(this, product)}
            delete={this.deleteProduct.bind(this, product._id)}
          />
        );
    });

    return (
      <div>
        { productsListRendered }
      </div>
    );
  }
}

export default ProductList;
