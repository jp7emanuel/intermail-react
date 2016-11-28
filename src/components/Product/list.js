import React, { Component } from 'react';
import Product from '../Product/item';
import update from 'react-addons-update';
import _ from 'lodash';

const styles = {
  thumbnail: {
    position: 'relative',
    marginBottom: '2.5em'
  },
  btnWarning: {
    width: '100%'
  },
  row: {
    marginBottom: '3em'
  },
  addProductRow: {
    marginTop: '-1.5em',
    marginBottom: '2em'
  }
}

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list.length ? this.props.list : [],
      lastInsertId: this.props.list.length ? _.last(this.props.list)._id : 0,
      addProduct: true
    }
  }

  makeProduct() {
    if (this.state.addProduct) {
      let newProduct = {
        _id: 'new_product',
        title: '',
        description: '',
        price: ''
      };
      this.setState({
        list: update(this.state.list, {
          $unshift: [newProduct]
        }),
        addProduct: false
      });
    }
  }

  deleteProduct(productId) {
    var index = this.state.list.findIndex(item => item._id === productId);
    this.setState({
      list: update(this.state.list, {
        $splice: [[index, 1]]
      }),
      addProduct: true
    });

  }

  storeProduct(product) {
    var index = 0;
    if (product._id === 'new_product') {
      product._id = this.state.lastInsertId + 1;
    } else {
      index = this.state.list.findIndex(item => item._id === product._id);
    }

    this.setState(update(this.state, {
      list: {
        [index]: {$merge: product}
      },
      addProduct: {$set: true},
      lastInsertId: {$set: this.state.lastInsertId + 1}
    }));
  }

  render() {
    const productsListRendered = this.state.list.map((product, i) => {
      return (
        <div key={product._id} className="thumbnail well text-center clearfix" style={styles.thumbnail}>
          <Product product={product} delete={this.deleteProduct.bind(this)} store={this.storeProduct.bind(this)} />
        </div>
      );
    });

    return (
      <div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <div className="row" style={styles.row}>
          <div className="col-xs-12">
            <button className="btn btn btn-warning" style={styles.btnWarning} onClick={this.makeProduct.bind(this)}>Adicionar Produto</button>
          </div>
        </div>
        { productsListRendered }
      </div>
    );
  }
}

export default ProductList;
