import React, { Component } from 'react';
import Product from '../Product/item';
import update from 'react-addons-update';
import SortableListItem from '../Sortable';
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
      draggingIndex: null,
      items: this.props.list.length ? this.props.list : [],
      lastInsertId: this.props.list.length ? _.last(this.props.list)._id : 0,
      addProduct: true
    }
  }

  updateState(obj) {
    this.setState(obj);
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
        items: update(this.state.items, {
          $unshift: [newProduct]
        }),
        addProduct: false
      });
    }
  }

  deleteProduct(productId) {
    var index = this.state.items.findIndex(item => item._id === productId);
    var addProduct = true;
    if (_.first(this.state.items)._id === 'new_product') {
      addProduct = false;
    }
    this.setState({
      items: update(this.state.items, {
        $splice: [[index, 1]]
      }),
      addProduct: addProduct
    });

  }

  storeProduct(product) {
    var index = 0;
    if (product._id === 'new_product') {
      product._id = this.state.lastInsertId + 1;
    } else {
      index = this.state.items.findIndex(item => item._id === product._id);
    }

    this.setState(update(this.state, {
      items: {
        [index]: {$merge: product}
      },
      addProduct: {$set: true},
      lastInsertId: {$set: this.state.lastInsertId + 1}
    }));
  }

  render() {
    var self = this;

    const productsListRendered = this.state.items.map((product, i) => {
      return (
        <div key={product._id} className="thumbnail well text-center clearfix" style={styles.thumbnail}>
          <SortableListItem
            key={product._id}
            updateState={self.updateState.bind(this)}
            items={self.state.items}
            draggingIndex={self.state.draggingIndex}
            sortId={product._id}
            outline="list"
          >
            <Product product={product} delete={self.deleteProduct.bind(this)} store={self.storeProduct.bind(this)} />
          </SortableListItem>
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
