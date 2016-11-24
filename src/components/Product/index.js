import React, { Component } from 'react';

const styles = {
  close: {
    position: "absolute",
    marginRight: -15,
    marginTop: -15,
    right: 0,
    top: 0,
    border: '5px solid transparent',
    borderRadius: 50,
    backgroundColor: 'red',
    color: 'white',
  },
  thumbnail: {
    position: 'relative',
    marginBottom: '2.5em'
  }
}

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.informations
    }
  }

  render() {
    return (
      <div className="thumbnail well text-center clearfix" style={styles.thumbnail}>
        <form >
          <button style={styles.close} onClick={this.props.delete}>x</button>
          <img src={this.state.product.img} alt="asdasdasd"/>
          <div className="caption">
            <h3>{this.state.product.title} - R$ {this.state.product.price}</h3>
            <p>{this.state.product.description}</p>
          </div>
          <button type="submit" className="btn btn-primary pull-right" onClick={this.props.save}>Salvar</button>
        </form>
      </div>
    );
  }
}

export default Product;
