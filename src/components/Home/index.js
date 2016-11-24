import React, { Component } from 'react';
import ProductList from '../Product/list';
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
      list: productList
    }
  }

  create() {
    var lastProduct = _.first(this.state.list);

    var newProduct = {
      "_id": parseInt(lastProduct._id+1, 10),
      "title": null,
      "description": null,
      "img": null,
      "price": null
    }

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
      })
    });
  }

  render() {
    return (
      <div className="container">
        <legend>
          <h1>React</h1>
        </legend>
        <div className="row" style={styles.row}>
          <div className="col-xs-12">
            <a href="#" className="btn btn btn-warning" style={styles.btnWarning} onClick={this.create.bind(this)}>Adicionar Produto</a>
          </div>
        </div>
        <div className="row" style={styles.row}>
          <div className="col-xs-12">
            <ProductList list={this.state.list} deleteProduct={this._deleteProduct.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
