import React, { Component } from 'react';
import { numberFormater } from '../helper';
import '../../styles/Home.css';

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
              <h3 style={{backgroundColor:'red'}}>{numberFormater(price,1000,0)}€</h3>
            </div>
            <div className='HomeDetailsMinor'>
              <p style={{backgroundColor:'red'}}><b>{numberFormater(size,1,0)}</b>m²</p>
              <p style={{backgroundColor:'red'}}><b>{numberFormater(m2Price,1,0)}</b>€/m²</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
