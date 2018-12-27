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
              />
            }
          />
          <Filter
            id='m2'
            label='Price /M2 Filter'
            popupContent={
              <SliderComponent
                title='The average m2 price is EXk'
              />
            }
          />
          <Filter
            id='size'
            label='Size Filter'
            popupContent={
              <SliderComponent
                title='The average size is EXk'
              />
            }
          />
          <Filter
            id='city'
            label='Select City'
            popupContent={
              <SliderComponent
              />
            }
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
