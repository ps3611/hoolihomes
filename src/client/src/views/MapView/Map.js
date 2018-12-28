import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import HomeMarker from './HomeMarker';

const Map = withScriptjs(withGoogleMap((props) => {
  const markers = props.homes.map((home,i) => {
    return (
      <HomeMarker
         key={i}
         home={home}
         location={{lat: home.latitude, lng: home.longitude}}
       />
    );
  });

  return (
      <GoogleMap
        defaultZoom={12}
        center={{
          lat: props.lat,
          lng: props.lng,
        }}
        defaultOptions={{
           streetViewControl: false,
           scaleControl: false,
           mapTypeControl: false,
           panControl: false,
           zoomControl: true,
           rotateControl: false,
           fullscreenControl: false,
         }}
      >
      {markers}
      </GoogleMap>
    );
  }
))

export default Map;