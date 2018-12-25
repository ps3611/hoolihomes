import React, { Component } from 'react';
import Map from './Map';
import '../styles/MapView.css'

const API_KEY = 'AIzaSyC0u6q2foaWzf3PEJWi9pKWDTnXpL9ENMc';

class MapView extends Component {
  render() {
    return (
      <div className="MapView">
        <Map
  				doctors={this.props.doctors}
  				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
  				loadingElement={<div style={{ height: `100%` }} />}
  				containerElement={<div style={{ height: `100%`, width: `100%` }} />}
  				mapElement={<div style={{ height: `100%` }} />}
  			/>
      </div>
    );
  }
}

export default MapView;
