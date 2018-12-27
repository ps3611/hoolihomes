import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHomesList } from '../../actions/apiActions';
import { selectPriceRange, selectM2PriceRange, selectSizeRange } from '../../actions/settingsActions';
import Filter from './Filter';
import SliderComponent from './SliderComponent';
import SelectCity from './SelectCity';
import '../../styles/Navbar.css';

class Navbar extends Component {

  render() {
    const {
      fetchHomesList,
      queryParameters,
      selectPriceRange,
      selectM2PriceRange,
      selectSizeRange,
    } = this.props;
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
            label='Price Filter'
            popupContent={
              <SliderComponent
                key={1}
                title='The average price is EXk'
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
            label='M2 Price Filter'
            popupContent={
              <SliderComponent
                key={2}
                title='The average m2 price is EXk'
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
            label='Size Filter'
            popupContent={
              <SliderComponent
                key={3}
                title='The average size is EXk'
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
            label='Select City'
            popupContent={
              <SelectCity />
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
  queryParameters: state.settings.queryParameters,
});

const mapDispatchToProps = dispatch => ({
  selectPriceRange: range => dispatch(selectPriceRange(range)),
  selectM2PriceRange: range => dispatch(selectM2PriceRange(range)),
  selectSizeRange: range => dispatch(selectSizeRange(range)),
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

