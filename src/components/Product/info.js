import React, { Component } from 'react';

class ProductInfo extends Component {
  render() {
    return (
      <div>
        <div className="caption">
          <h3>{this.props.title} - R$ {this.props.price}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
