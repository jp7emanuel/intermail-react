import React, { Component } from 'react';
import ProductItem from '../Product/item';

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

class ProductList extends Component {
  render() {
    const productsListRendered = this.props.list.map((product, i) => {
        return (
          <div key={product._id} className="thumbnail well text-center clearfix" style={styles.thumbnail}>
            <button style={styles.close} onClick={this.props.deleteProduct.bind(null, product._id)}>x</button>
            <ProductItem  informations={product} />
            <button className="btn btn-primary pull-right" onClick={this.props.storeProduct.bind(null, product)}>Salvar</button>
          </div>
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
