import React, { Component } from 'react';
import ProductForm from './form';
import ProductInfo from './info';
import update from 'react-addons-update';

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
  }
}

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        _id: this.props.product._id || '',
        title: this.props.product.title || '',
        description: this.props.product.description || '',
        price: this.props.product.price || ''
      },
      editBtn: this.props.edit ? true : false,
      closeBtn: this.props.store ? false : true
    }
  }

  handleEdit() {
    this.setState({
      editBtn: false
    });
  }

  handleStore() {
    this.setState({
      editBtn: true,
      closeBtn: true,
    });
  }

  handleFieldsChange(name, e) {
    e.preventDefault();
    this.setState({
      product: update(this.state.product, {
        [name]: {
          $set: e.target.value
        }
      })
    });
  }

  render() {
    let productRendered = null;
    if (this.state.editBtn) {
      productRendered = (
        <div>
          <ProductInfo product={this.state.product} />
          <button className="btn btn-success pull-right" onClick={this.handleEdit.bind(this)}>Editar</button>
        </div>
      );
    } else {
      productRendered = (
        <div>
          <ProductForm
            storeProduct={this.handleStore.bind(this)}
            product={this.state.product}
            onChange={this.handleFieldsChange.bind(this)}
          />
        </div>
      );
    }

    let closeBtnRendered = null;
    if (this.state.closeBtn) {
      closeBtnRendered = (<button style={styles.close} onClick={this.props.delete.bind(null, this.state.product._id)}>x</button>);
    }

    return (
      <div key={this.state.product._id}>
        {closeBtnRendered}
        {productRendered}
      </div>
    );
  }
}

export default Product;
