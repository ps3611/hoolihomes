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
          <div className="Filter">
            <h3>Price Filter</h3>
          </div>
          <div className="Filter">
            <h3>Price Per M2</h3>
          </div>
          <div className="Filter">
            <h3>Size</h3>
          </div>
          <div className="Filter">
            <h3>City Filter</h3>
          </div>
          <div className="Filter">
            <h3>Country Filter</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
