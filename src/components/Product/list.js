import React, { Component } from 'react';
import Product from '../Product/item';

class ProductList extends Component {
  saveProduct(product) {
    // console.log(product);
    // var product = this;
    // this.setState({
    //   list: this.state.list.push(product)
    // });
  }

  render() {
    const productsListRendered = this.props.list.map((product, i) => {
        return (
          <Product
            informations={product}
            key={product._id}
            save={this.saveProduct.bind(this, product)}
            delete={this.props.deleteProduct.bind(null, product._id)}
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
