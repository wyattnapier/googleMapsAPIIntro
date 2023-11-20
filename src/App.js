import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Map from './Map.js';
import './App.css'

function App () {
  return (
    <div className="Container">
      <h1>Welcome to my website with a map on it</h1>
      <Map />
      <p>I hope you enjoyed</p>
    </div>
  );
};

export default App;