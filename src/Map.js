import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '50vw',
  height: '75vh',
  margin: '12vh auto'
};
const center = {
  // 42.3601° N, 71.0589° W
  lat: 42.3601, // default latitude
  lng: -71.0589, // default longitude
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCzU8XG3cRB1nd4YdwfmYFCn_hxQmFFKM0',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;


// API key: AIzaSyCzU8XG3cRB1nd4YdwfmYFCn_hxQmFFKM0