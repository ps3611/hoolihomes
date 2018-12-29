import React, { Component } from 'react';
import '../../styles/Home.css'

class Home extends Component {
  render() {
    const {
      picture,
      title,
      price,
      size,
      m2Price,
    } = this.props;
    return (
      <div className='Home'>
        <div className='HomePicture' style={{ backgroundImage: `url(${picture})`}}>
        </div>
        <div className='HomeInfo'>
          <div className='HomeTitle'>
            <h3 style={{backgroundColor:'red'}}>{title}</h3>
          </div>
          <div className='HomeDetails'>
            <div className='HomeDetailsPrice'>
              <h3 style={{backgroundColor:'red'}}>{price}€</h3>
            </div>
            <div className='HomeDetailsMinor'>
              <p style={{backgroundColor:'red'}}><b>{size}</b>m²</p>
              <p style={{backgroundColor:'red'}}><b>{m2Price}</b>€/m²</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
