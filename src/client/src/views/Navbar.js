import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';
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
          <div className='Filter' id='price' onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}>
            <h3>Price Filter</h3>
            <ToolTip active={this.state.isTooltipActive} parent='#price' position='bottom' arrow='left'>
              Select Price Range!
            </ToolTip>
          </div>
          <div className='Filter'>
            <h3>Price /M2 Filter</h3>
          </div>
          <div className='Filter'>
            <h3>Size Filter</h3>
          </div>
          <div className='Filter'>
            <h3>City Filter</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
