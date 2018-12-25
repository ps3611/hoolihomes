import React from 'react';
import { Marker } from 'react-google-maps';

export default class HomeMarker extends React.Component {
  render(){
    return(
        <Marker
          position={this.props.location}
        >
        </Marker>
    );
  }
}