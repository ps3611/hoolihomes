import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';
import SliderComponent from './SliderComponent';
import '../styles/Navbar.css';

class Navbar extends Component {

  render() {
    const { priceValues, m2PriceValues, sizeValues} = this.props;
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
                values={priceValues}
                info={priceSliderInfo}
              />
            }
          />
          <Filter
            id='m2'
            label='Price /M2 Filter'
            popupContent={
              <SliderComponent
                key={2}
                title='The average m2 price is EXk'
                values={m2PriceValues}
                info={m2PriceSliderInfo}
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
                values={sizeValues}
                info={sizeSliderInfo}
              />
            }
          />
          <Filter
            id='city'
            label='Select City'
            popupContent={
              'Select City!'
            }
          />
        </div>
      </div>
    );
  }
}

const priceSliderInfo = {
  min: 0,
  max: 2000000,
  step: 100000,
  // defaultValue: [0,2000000],
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
  // defaultValue: [0,20000],
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
  	// defaultValue: [0,500],
    marks: {
      0: <strong>0</strong>,
      100: 1,
      500: <strong>500m2</strong>,
    }
}

const mapStateToProps = state => ({
  priceValues: state.settings.queryParameters.price,
  m2PriceValues: state.settings.queryParameters.pricePerSquareMeter,
  sizeValues: state.settings.queryParameters.size,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
