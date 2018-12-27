import React, { Component } from 'react';
import Filter from './Filter';
import SliderComponent from './SliderComponent';
import '../styles/Navbar.css'

class Navbar extends Component {

  render() {
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
                title='The average price is EXk'
                info={priceSliderInfo}
              />
            }
          />
          <Filter
            id='m2'
            label='Price /M2 Filter'
            popupContent={
              <SliderComponent
                title='The average m2 price is EXk'
                info={m2PriceSliderInfo}
              />
            }
          />
          <Filter
            id='size'
            label='Size Filter'
            popupContent={
              <SliderComponent
                title='The average size is EXk'
                info={sizeSliderInfo}
              />
            }
          />
          <Filter
            id='city'
            label='Select City'
            popupContent={
              <SliderComponent
                title='Select city...'
              />
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
  included: false,
  defaultValue: [0,2000000],
  allowCross: false,
  marks: {
    0: <strong>0</strong>,
    1000000: 1,
    2000000: <strong>2MM€</strong>,
  }
}

const m2PriceSliderInfo = {
  min: 0,
  max: 2000000,
  step: 100000,
  included: false,
  defaultValue: [0,2000000],
  allowCross: false,
  marks: {
    0: <strong>0</strong>,
    1000000: 1,
    2000000: <strong>2MM€</strong>,
  }
}

const sizeSliderInfo = {
  min: 0,
  max: 2000000,
  step: 100000,
  included: false,
  defaultValue: [0,2000000],
  allowCross: false,
  marks: {
    0: <strong>0</strong>,
    1000000: 1,
    2000000: <strong>2MM€</strong>,
  }
}

export default Navbar;
