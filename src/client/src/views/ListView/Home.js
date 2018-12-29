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
            <h4>{title}</h4>
          </div>
          <div className='HomePrice'>
            <h3>{numberFormater(price,1000,0)}€</h3>
          </div>
          <div className='HomeDetails'>
            <div className='HomeSize'>
              <p>{numberFormater(size,1,0)}m²</p>
            </div>
            <div className='HomeM2Price'>
              <p>{numberFormater(m2Price,1,0)}€/m²</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
