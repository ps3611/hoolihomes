import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHomesList } from '../../actions/apiActions';
import { selectPriceRange, selectM2PriceRange, selectSizeRange, selectCity } from '../../actions/settingsActions';
import Filter from './Filter';
import SliderComponent from './SliderComponent';
import SelectCity from './SelectCity';
import '../../styles/Navbar.css';

class Navbar extends Component {
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
    const priceLabel = priceFilterChanged ? `€${queryParameters.price[0]/1000}k-€${queryParameters.price[1]/1000}k` : 'Price';
    const m2PriceLabel = m2PriceFilterChanged ? `€${queryParameters.price[0]}/m2 -${queryParameters.price[1]}/m2` : 'm2 Price';
    const sizeLabel = sizeFilterChanged ? String(queryParameters.size) : 'Size';
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
                title='The average price is €Xk'
                values={queryParameters.price}
                updateValues={selectPriceRange}
                info={priceSliderInfo}
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
                key={2}
                title='The average m2 price is €Xk'
                values={queryParameters.pricePerSquareMeter}
                updateValues={selectM2PriceRange}
                info={m2PriceSliderInfo}
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
                key={3}
                title='The average size is €Xk'
                values={queryParameters.size}
                updateValues={selectSizeRange}
                info={sizeSliderInfo}
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
  m2PriceValues: state.settings.queryParameters.pricePerSquareMeter,
  sizeValues: state.settings.queryParameters.size,
  selectedCity: state.settings.selectedCity,
  priceFilterChanged: state.settings.priceFilterChanged,
  m2PriceFilterChanged: state.settings.m2PriceFilterChanged,
  sizeFilterChanged: state.settings.sizeFilterChanged,
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

