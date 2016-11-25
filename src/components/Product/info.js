import React, { Component } from 'react';

class ProductInfo extends Component {
  render() {
    return (
      <div>
        <div className="caption">
          <h3>{this.props.product.title} - R$ {this.props.product.price}</h3>
          <p>{this.props.product.description}</p>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
