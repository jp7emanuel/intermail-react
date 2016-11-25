import React, { Component } from 'react';

class ProductForm extends Component {
  render() {
    return (
      <div>
        <div className="form-group col-xs-9">
          <input type="text"
            name="title"
            className="form-control col-xs-3"
            placeholder="Titulo"
            value={this.props.product.title}
            onChange={this.props.onChange.bind(this, 'title')}
          />
        </div>
        <div className="form-group col-xs-3">
          <input type="text"
            name="price"
            className="form-control col-xs-3"
            placeholder="Preço"
            value={this.props.product.price}
            onChange={this.props.onChange.bind(this, 'price')}
          />
        </div>
        <div className="form-group col-xs-12">
          <textarea type="text"
            name="description"
            rows="5"
            className="form-control col-xs-3"
            placeholder="Descrição"
            value={this.props.product.description}
            onChange={this.props.onChange.bind(this, 'description')}
          />
        </div>
        <div className="form-group col-xs-12">
          <button className="btn btn-primary pull-right" onClick={this.props.storeProduct}>Salvar</button>
        </div>
      </div>
    );
  }
}

export default ProductForm;
