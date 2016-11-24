import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div>
        <img src={this.props.informations.img} alt="asdasdasd"/>
        <div className="caption">
          <h3>{this.props.informations.title} - R$ {this.props.informations.price}</h3>
          <p>{this.props.informations.description}</p>
        </div>
      </div>
    );
  }
}

export default Product;
