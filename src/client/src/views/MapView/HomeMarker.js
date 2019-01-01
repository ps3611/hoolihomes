import React from 'react';
import { Marker } from 'react-google-maps';
import { numberFormater } from '../helper';

export default class HomeMarker extends React.Component {
  render() {
    const icon = {
      url: require('../../assets/MarkerInactive.svg'),
      scaledSize: {
        width: 52,
        height: 52,
      }
    };
    const { home, location } = this.props;
    const label = numberFormater(home.price,10000,3,'k€');
    return(
        <Marker
          position={location}
          label={label}
          options={{
            icon: icon
          }}
        >
        </Marker>
    );
  }
}