import React, { Component } from 'react';
import './Strain.css';

class Strain extends Component {
  render() {
    const { name, photo } = this.props.item;

    const bgStyle = {
      backgroundImage:  'url(' + photo + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    const wrapperStyle = {
      margin: this.props.noPaddding ? '0 0 10px 0' : '0 10px 10px 0'
    }

    return (
      <div className="strain-wrapper" style={wrapperStyle}>
        <div className="strain" style={bgStyle}>
          <p className="name">{name}</p>
          <div className="overlay"/>
        </div>
      </div>
    );
  }
}

export default Strain;
