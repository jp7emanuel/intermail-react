import React, { Component } from 'react';
import ProductList from '../ProductList';
import list from '../../../server/products.json';

const styles = {
  btnWarning: {
    width: '100%'
  },
  row: {
    marginBottom: '3em'
  }
}

class Home extends Component {
  render() {
    return (
      <div className="container">
        <legend>
          <h1>React</h1>
        </legend>
        <div className="row" style={styles.row}>
          <div className="col-xs-12">
            <a href="#" className="btn btn btn-warning" style={styles.btnWarning}>Adicionar Produto</a>
          </div>
        </div>
        <div className="row" style={styles.row}>
          <div className="col-xs-12">
            <ProductList list={list} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
