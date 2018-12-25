import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import HomeMarker from './HomeMarker';

const Map = withScriptjs(withGoogleMap((props) => {

  const markers = props.homes.map((home,i) => {
    console.log(home);
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
        defaultZoom={14}
        center={{ lat:  42.3601, lng: -71.0589 }}
      >
      {markers}
      </GoogleMap>
    );
  }
))

export default Map;