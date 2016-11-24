import React, { Component } from 'react';

const styles = {
  imgPreview: {
    textAlign: 'center',
    margin: '15px 0',
    height: 200,
    width: 320
  },
  img: {
    width: '100%',
    height: '100%'
  },
  row: {
    marginTop: '-2.5em',
    marginBottom: '3em'
  }
}

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      img: '',
      title: '',
      description: '',
      price: ''
    }
  }

  handleFieldChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        img: reader.result
      });
    }

    reader.readAsDataURL(file);
  }

  handleSubmit() {
    return this.state;
  }

  render() {
    let {img} = this.state;
    let imagePreview = null;
    if (img) {
      imagePreview = (
        <div style={styles.imgPreview}>
          <img src={img} role="presentation" style={styles.img} />
        </div>
      );
    }

    return (
      <div style={styles.row}>
        <div className="well clearfix">
          <legend><h3>Informações do Produto</h3></legend>
          <div className="form-group col-xs-12">
            <input type="file" name="img" onChange={(e) => this.handleImageChange(e)}/>
            {imagePreview}
          </div>

          <div className="form-group col-xs-9">
            <input type="text"
              name="title"
              className="form-control col-xs-3"
              placeholder="Titulo"
              value={this.state.title}
              onChange={this.handleFieldChange.bind(this, 'title')}
            />
          </div>
          <div className="form-group col-xs-3">
            <input type="text"
              name="price"
              className="form-control col-xs-3"
              placeholder="Preço"
              value={this.state.price}
              onChange={this.handleFieldChange.bind(this, 'price')}
            />
          </div>
          <div className="form-group col-xs-12">
            <textarea type="text"
              name="description"
              rows="5"
              className="form-control col-xs-3"
              placeholder="Descrição"
              value={this.state.description}
              onChange={this.handleFieldChange.bind(this, 'description')}
            />
          </div>
          <div className="form-group col-xs-12">
            <button className="btn btn-primary pull-right" onClick={this.props.storeProduct.bind(null, this.state)}>Salvar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductForm;
