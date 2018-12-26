import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';
import Filter from './Filter';
import '../styles/Navbar.css'

class Navbar extends Component {

  state = {
     isTooltipActive: false
  }

  showTooltip() {
     this.setState({isTooltipActive: true})
  }

  hideTooltip() {
     this.setState({isTooltipActive: false})
  }

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
            popupLabel='Select Price Range!'
          />
          <Filter
            id='m2'
            label='Price /M2 Filter'
            popupLabel='Select M2 Price Range!'
          />
          <Filter
            id='size'
            label='Size Filter'
            popupLabel='Select Size Range!'
          />
          <Filter
            id='city'
            label='City Filter'
            popupLabel='Select City!'
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
