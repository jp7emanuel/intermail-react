import React, { Component } from 'react';

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
  },
  thumbnail: {
    position: 'relative',
    marginBottom: '2.5em'
  }
}

class Product extends Component {
  render() {
    return (
      <div className="thumbnail well text-center clearfix" style={styles.thumbnail}>
        <form>
          <button style={styles.close} onClick={this.props.delete}>x</button>
          <img src={this.props.informations.img} alt="asdasdasd"/>
          <div className="caption">
            <h3>{this.props.informations.title} - R$ {this.props.informations.price}</h3>
            <p>{this.props.informations.description}</p>
          </div>
          <button type="submit" className="btn btn-primary pull-right" onClick={this.props.save}>Salvar</button>
        </form>
      </div>
    );
  }
}

export default Product;
