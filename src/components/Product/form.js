import React, { Component } from 'react';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id : this.props._id,
      title : this.props.title,
      description : this.props.description,
      price : this.props.price
    }
  }

  onChange(name, e) {
    this.setState({
      [name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="form-group col-xs-9">
          <input type="text"
            name="title"
            className="form-control col-xs-3"
            placeholder="Titulo"
            value={this.state.title}
            onChange={this.onChange.bind(this, 'title')}
          />
        </div>
        <div className="form-group col-xs-3">
          <input type="text"
            name="price"
            className="form-control col-xs-3"
            placeholder="Preço"
            value={this.state.price}
            onChange={this.onChange.bind(this, 'price')}
          />
        </div>
        <div className="form-group col-xs-12">
          <textarea type="text"
            name="description"
            rows="5"
            className="form-control col-xs-3"
            placeholder="Descrição"
            value={this.state.description}
            onChange={this.onChange.bind(this, 'description')}
          />
        </div>
        <div className="form-group col-xs-12">
          <button className="btn btn-primary pull-right" onClick={this.props.store.bind(null, this.state)}>Salvar</button>
        </div>
      </div>
    );
  }
}

export default ProductForm;
