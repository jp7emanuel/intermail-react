import React, { Component } from 'react';

const styles = {
  close: {
    position: "absolute",
    right: 5,
    top: -12,
    border: '5px solid transparent',
    borderRadius: 50,
    backgroundColor: 'red',
    color: 'white'
  }
}

class Product extends Component {
  constructor(props) {
    super(props);
    this.product = props.informations;
  }
  render() {
    return (
      <div className="thumbnail well text-center clearfix">
        <button style={styles.close}>x</button>
        <img src={this.product.img} alt="asdasdasd"/>
        <div className="caption">
          <h3>{this.product.title} - R$ {this.product.price}</h3>
          <p>{this.product.description}</p>
        </div>

        <button className="btn btn-primary pull-right ">Salvar</button>
      </div>
    );
  }
}

export default Product;
