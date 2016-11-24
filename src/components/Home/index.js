import React, { Component } from 'react';
import ProductList from '../Product/list';
import ProductForm from '../Product/form';
import list from '../../../server/products.json';
import update from 'react-addons-update';
import _ from 'lodash';

const productList = _.reverse(list.products);

const styles = {
  btnWarning: {
    width: '100%'
  },
  row: {
    marginBottom: '3em'
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: productList,
      addProduct: false
    }
  }

  _addProduct() {
    this.setState({
      addProduct: !this.state.addProduct
    });
  }

  _storeProduct(newProduct) {
    var lastProduct = _.first(this.state.list);

    newProduct._id = parseInt(lastProduct._id+1, 10);

    console.log(newProduct);
    this.setState({
      list: update(this.state.list, {
        $unshift: [newProduct]
      })
    });
  }

  _deleteProduct(productId) {
    var index = this.state.list.findIndex(item => item._id === productId);
    this.setState({
      list: update(this.state.list, {
        $splice: [[index, 1]]
      }),
      addProduct: false
    });
  }

  render() {
    let renderNewProduct = null;
    if (this.state.addProduct) {
      renderNewProduct = (<ProductForm storeProduct={this._storeProduct.bind(this)} />);
    }
    return (
      <div className="container">
        <legend>
          <h1>React</h1>
        </legend>
        <div className="row" style={styles.row}>
          <div className="col-xs-12">
            <a href="#" className="btn btn btn-warning" style={styles.btnWarning} onClick={this._addProduct.bind(this)}>Adicionar Produto</a>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {renderNewProduct}
          </div>
        </div>
        <div className="row" style={styles.row}>
          <div className="col-xs-12">
            <ProductList list={this.state.list} deleteProduct={this._deleteProduct.bind(this)} storeProduct={this._storeProduct.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
