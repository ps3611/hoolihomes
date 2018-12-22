import React, { Component } from 'react';
import '../styles/Home.css'

class Home extends Component {
  render() {
    const {
      picture,
      size,
      price,
    } = this.props;
    return (
      <div className='Home'>
        <div className='HomePicture' style={{ backgroundImage: `url(${picture})`}}>
        </div>
        <div className='HomeInfo'>
          <div className='HomeTitle'>
            <h3>Home Name</h3>
          </div>
          <div className='HomeDetails'>
            <p>{size}m2</p>
            <p>${price}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
