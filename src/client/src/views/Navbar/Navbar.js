import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHomesList } from '../../actions/apiActions';
import { selectPriceRange, selectM2PriceRange, selectSizeRange, selectCity } from '../../actions/settingsActions';
import Filter from './Filter';
import SliderComponent from './SliderComponent';
import SelectCity from './SelectCity';
import '../../styles/Navbar.css';

class Navbar extends Component {

  formatPriceLabel = (queryParameters) => {
    return `${queryParameters.price[0]/1000} - ${queryParameters.price[1]/1000} k€`;
  }

  formatSizeLabel = (queryParameters) => {
    return `${queryParameters.size[0]} - ${queryParameters.size[1]} m2`;
  }

  formatM2PriceLabel = (queryParameters) => {
    return `${queryParameters.m2Price[0]/1000} - ${queryParameters.m2Price[1]/1000} €/m2`;
  }

  render() {
    const {
      selectedCity,
      fetchHomesList,
      queryParameters,
      selectPriceRange,
      selectM2PriceRange,
      selectSizeRange,
      selectCity,
      priceFilterChanged,
      m2PriceFilterChanged,
      sizeFilterChanged,
    } = this.props;
    const priceLabel = priceFilterChanged ? this.formatPriceLabel(queryParameters) : 'Price';
    const m2PriceLabel = m2PriceFilterChanged ? this.formatM2PriceLabel(queryParameters) : 'm2 Price';
    const sizeLabel = sizeFilterChanged ? this.formatSizeLabel(queryParameters) : 'Size';
    return (
      <div className='Navbar'>
        <div className='NavbarLogo'>
          <h1>Hooli Homes</h1>
        </div>
        <div className='NavbarFilters'>
          <div className='Reset'>
            <h3>Reset!</h3>
          </div>
          <Filter
            id='price'
            label={priceLabel}
            popupContent={
              <SliderComponent
                key={1}
                title={`The average price is €${Math.round(this.props.avgPrice/1000)}k`}
                values={queryParameters.price}
                updateValues={selectPriceRange}
                info={priceSliderInfo}
                fetchHomesList={fetchHomesList}
                queryParameters={queryParameters}
              />
            }
          />
          <Filter
            id='size'
            label={sizeLabel}
            popupContent={
              <SliderComponent
                key={2}
                title={`The average size is ${this.props.avgSize}m2`}
                values={queryParameters.size}
                updateValues={selectSizeRange}
                info={sizeSliderInfo}
                fetchHomesList={fetchHomesList}
                queryParameters={queryParameters}
              />
            }
          />
        <Filter
          id='m2'
          label={m2PriceLabel}
          popupContent={
            <SliderComponent
              key={3}
              title={`The average m2 price is €${this.props.avgM2Price}`}
              values={queryParameters.m2Price}
              updateValues={selectM2PriceRange}
              info={m2PriceSliderInfo}
              fetchHomesList={fetchHomesList}
              queryParameters={queryParameters}
              />
          }
          />
          <Filter
            id='city'
            label={selectedCity}
            popupContent={
              <SelectCity
                updateValues={selectCity}
                fetchHomesList={fetchHomesList}
                queryParameters={queryParameters}
              />
            }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  priceValues: state.settings.queryParameters.price,
  m2PriceValues: state.settings.queryParameters.m2Price,
  sizeValues: state.settings.queryParameters.size,
  selectedCity: state.settings.selectedCity,
  priceFilterChanged: state.settings.priceFilterChanged,
  m2PriceFilterChanged: state.settings.m2PriceFilterChanged,
  sizeFilterChanged: state.settings.sizeFilterChanged,
  queryParameters: state.settings.queryParameters,
  minPrice: state.api.minPrice,
  avgPrice: state.api.avgPrice,
  maxPrice: state.api.maxPrice,
  minSize: state.api.minSize,
  avgSize: state.api.avgSize,
  maxSize: state.api.maxSize,
  minM2Price: state.api.minM2Price,
  avgM2Price: state.api.avgM2Price,
  maxM2Price: state.api.maxM2Price,
});

const mapDispatchToProps = dispatch => ({
  selectPriceRange: range => dispatch(selectPriceRange(range)),
  selectM2PriceRange: range => dispatch(selectM2PriceRange(range)),
  selectSizeRange: range => dispatch(selectSizeRange(range)),
  selectCity: city => dispatch(selectCity(city)),
  fetchHomesList: queryParameters => dispatch(fetchHomesList(queryParameters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

const priceSliderInfo = {
  min: 0,
  max: 2000000,
  step: 100000,
  marks: {
    0: <strong>0</strong>,
    1000000: 1,
    2000000: <strong>2MM€</strong>,
  }
}

const m2PriceSliderInfo = {
  min: 0,
  max: 20000,
  step: 10000,
  marks: {
    0: <strong>0</strong>,
    10000: 1,
    20000: <strong>2M€</strong>,
  }
}

const sizeSliderInfo = {
  min: 0,
  max: 500,
  step: 50,
  marks: {
    0: <strong>0</strong>,
    100: 1,
    500: <strong>500m2</strong>,
  }
}

