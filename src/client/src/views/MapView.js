import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from './Map';
import '../styles/MapView.css';

const API_KEY = 'AIzaSyC0u6q2foaWzf3PEJWi9pKWDTnXpL9ENMc';

class MapView extends Component {
  render() {
    const { homesList, queryParameters } = this.props;
    return (
      <div className='MapView'>
        <Map
  				homes={homesList}
  				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
  				loadingElement={<div style={{ height: `100%` }} />}
  				containerElement={<div style={{ height: `100%`, width: `100%` }} />}
  				mapElement={<div style={{ height: `100%` }} />}
          lat={queryParameters.centerLatitude}
          lng={queryParameters.centerLongitude}
  			/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  homesList: state.api.homesList,
  queryParameters: state.settings.queryParameters,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MapView);
