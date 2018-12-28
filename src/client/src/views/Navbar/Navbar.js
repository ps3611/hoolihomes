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
    return `${queryParameters.m2Price[0]} - ${queryParameters.m2Price[1]} €/m2`;
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
                title={`The average price is ${Math.round(this.props.avgPrice/1000)}k€`}
                values={queryParameters.price}
                updateValues={selectPriceRange}
                min={this.props.minPrice}
                max={this.props.maxPrice}
                step={1000}
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
                min={this.props.minSize}
                max={this.props.maxSize}
                step={1}
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
              title={`The average m2 price is ${this.props.avgM2Price}€`}
              values={queryParameters.m2Price}
              updateValues={selectM2PriceRange}
              min={this.props.minM2Price}
              max={this.props.maxM2Price}
              step={10}
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
  minPrice: state.settings.minPrice,
  avgPrice: state.settings.avgPrice,
  maxPrice: state.settings.maxPrice,
  minSize: state.settings.minSize,
  avgSize: state.settings.avgSize,
  maxSize: state.settings.maxSize,
  minM2Price: state.settings.minM2Price,
  avgM2Price: state.settings.avgM2Price,
  maxM2Price: state.settings.maxM2Price,
  queryParameters: state.settings.queryParameters,
});

const mapDispatchToProps = dispatch => ({
  selectPriceRange: range => dispatch(selectPriceRange(range)),
  selectM2PriceRange: range => dispatch(selectM2PriceRange(range)),
  selectSizeRange: range => dispatch(selectSizeRange(range)),
  selectCity: city => dispatch(selectCity(city)),
  fetchHomesList: queryParameters => dispatch(fetchHomesList(queryParameters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
