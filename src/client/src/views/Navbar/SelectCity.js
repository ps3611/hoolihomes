import React, { Component } from 'react';
import '../../styles/SelectCity.css';

const cityList = ['Barcelona', 'Paris', 'Montpelier', 'Nice', 'London', 'Vence', 'Rennes', 'Marseille'];

class SelectCity extends Component {
  render() {
    const cities = cityList.map(city => (
      <div className='City'>
        {city}
      </div>
    ));
    return (
      <div className='SelectCity'>
        {cities}
      </div>
    );
  }
}

export default SelectCity;
