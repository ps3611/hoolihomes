import React from 'react';
import { Marker } from 'react-google-maps';

export default class HomeMarker extends React.Component {

  formatLabel = (number) => {
    const thousands = number/1000;
    return(`E${thousands}k`);
  }

  render() {
    const icon = {
      url: require('../assets/MarkerGreen.svg'),
      scaledSize: {
        width: 52,
        height: 52,
      }
    };
    const { home, location } = this.props;
    const label = this.formatLabel(home.price);
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