import React, { Component } from 'react';
import ProductForm from './form';
import ProductInfo from './info';

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
        _id : this.props.product._id,
        title : this.props.product.title,
        description : this.props.product.description,
        price : this.props.product.price
      },
      editBtn: this.props.product._id !== 'new_product' ? true : false
    }
  }

  handleEdit() {
    this.setState({
      editBtn: false
    });
  }

  handleStore(product) {
    this.setState({
      editBtn: true
    });

    this.props.store(product);
  }

  _handleFieldsChange(name, e) {
    e.preventDefault();
    this.setState({
      [name]: e.target.value
    });
  }

  render() {
    let productRendered = null;
    if (this.state.editBtn) {
      productRendered = (
        <div>
          <ProductInfo
            title={this.state.product.title}
            description={this.state.product.description}
            price={this.state.product.price}
          />
          <button className="btn btn-success pull-right" onClick={this.handleEdit.bind(this)}>Editar</button>
        </div>
      );
    } else {
      productRendered = (
        <div>
          <ProductForm
            _id={this.state.product._id}
            title={this.state.product.title}
            description={this.state.product.description}
            price={this.state.product.price}
            store={this.handleStore.bind(this)}
          />
        </div>
      );
    }

    return (
      <div>
        <button style={styles.close} onClick={this.props.delete.bind(null, this.props.product._id)}>x</button>
        {productRendered}
      </div>
    );
  }
}

export default Product;
