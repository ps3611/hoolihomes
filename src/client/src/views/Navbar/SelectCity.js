import React, { Component } from 'react';
import '../../styles/SelectCity.css';
const { cities } = require('./cities.json');

class SelectCity extends Component {
  render() {
    const className = cities.length > 5 ? 'SelectCity SelectCityLong' : 'SelectCity';
    const cityList = cities.map((city,i) => (
      <div
        key={i}
        className='City'
      >
        {city.name}
      </div>
    ));
    return (
      <div className={className}>
        {cityList}
      </div>
    );
  }
}

export default SelectCity;
