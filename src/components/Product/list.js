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
      list: this.props.list,
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
      var lastItemId = _.last(this.state.list)._id;
      product._id = lastItemId+1;
    } else {
      index = this.state.list.findIndex(item => item._id === product._id);
    }

    this.setState(update(this.state, {
      list: {
        [index]: {$merge: product}
      },
      addProduct: {$set: false}
    }));

    this.forceUpdate();
  }

  render() {
    console.log(this.state.list);
    const productsListRendered = this.state.list.map((product, i) => {
      return (
        <div key={product._id} className="thumbnail well text-center clearfix" style={styles.thumbnail}>
          <Product product={product} delete={this.deleteProduct.bind(this)} store={this.storeProduct.bind(this)} />
        </div>
      );
    });

    return (
      <div>
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
