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
      addProduct: false
    }
  }

  _makeProduct() {
    this.setState({
      addProduct: !this.state.addProduct
    });
  }

  deleteProduct(productId) {
    var index = this.state.list.findIndex(item => item._id === productId);
    this.setState({
      list: update(this.state.list, {
        $splice: [[index, 1]]
      })
    });
  }

  render() {
    console.log(this.state.list);

    const productsListRendered = this.state.list.map((product, i) => {
      return (
        <div key={product._id} className="thumbnail well text-center clearfix" style={styles.thumbnail}>
          <Product product={product} delete={this.deleteProduct.bind(this)} edit={true} />
        </div>
      );
    });

    let newProductRendered = null;
    if (this.state.addProduct) {
      newProductRendered = (
        <div className="clearfix" style={styles.addProductRow}>
            <div className="col-xs-12 well">
              <Product product={[]} delete={this.deleteProduct.bind(this)} store={true}/>
            </div>
        </div>
      );
    }

    return (
      <div>
        <div className="row" style={styles.row}>
          <div className="col-xs-12">
            <a href="#" className="btn btn btn-warning" style={styles.btnWarning} onClick={this._makeProduct.bind(this)}>Adicionar Produto</a>
          </div>
        </div>
        { newProductRendered }
        { productsListRendered }
      </div>
    );
  }
}

export default ProductList;
