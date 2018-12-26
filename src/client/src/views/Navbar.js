import React, { Component } from 'react';
import '../styles/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="NavbarLogo">
          <h1>Hooli Homes</h1>
        </div>
        <div className="NavbarFilters">
          <div className="Reset">
            <h3>Reset!</h3>
          </div>
          <div className="Filter">
            <h3>Price Filter</h3>
          </div>
          <div className="Filter">
            <h3>Price /M2 Filter</h3>
          </div>
          <div className="Filter">
            <h3>Size Filter</h3>
          </div>
          <div className="Filter">
            <h3>City Filter</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
