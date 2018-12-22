import React, { Component } from 'react';
import '../styles/Home.css'

class Home extends Component {
  render() {
    const {
      picture,
      size,
      price,
      pricePerSquareMeter,
      estimatedPrice,
    } = this.props;
    return (
      <div className='Home'>
        <img src={picture} alt='home'/>
        <h1>Home</h1>
        <p>Size: {size}</p>
        <p>Price: {price}</p>
        <p>Estimated Price: {estimatedPrice}</p>
        <p>Price per m2: {pricePerSquareMeter}</p>
      </div>
    );
  }
}

export default Home;
