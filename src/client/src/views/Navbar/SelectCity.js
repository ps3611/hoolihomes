import React, { Component } from 'react';
import '../../styles/SelectCity.css';
const { cities } = require('./cities.json');

class SelectCity extends Component {

  handleClick = city => {
    this.props.updateValues(city);
    this.props.fetchHomesListCity(this.props.queryParameters);
  }

  render() {
    const className = cities.length > 5 ? 'SelectCity SelectCityLong' : 'SelectCity';
    const cityList = cities.map((city,i) => (
      <div
        key={i}
        className='City'
        onClick={() => this.handleClick(city)}
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
