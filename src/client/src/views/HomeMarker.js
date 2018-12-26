import React from 'react';
import { Marker } from 'react-google-maps';

export default class HomeMarker extends React.Component {
  render() {
    const icon = {
      url: require('../assets/MarkerGreen.svg'),
      scaledSize: {
        width: 52,
        height: 52,
      }
    };
    return(
        <Marker
          position={this.props.location}
          label={'200kE'}
          options={{
            icon: icon
          }}
        >
        </Marker>
    );
  }
}