import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import placesData from './placesData';
import trinidadIcon from './Images/Trinidad.png';
import barbadosIcon from './Images/Barbados.png'; 
import jamaicaIcon from './Images/Jamaica.png';
import cubaIcon from './Images/Cuba.png';
import drIcon from './Images/DR.png';
import haitiIcon from './Images/Haiti.png';
import bahamasIcon from './Images/Bahamas.png';
import puertoricoIcon from './Images/PuertoRico.png';
import guyanaIcon from './Images/Guyana.png';

// Defines custom marker icons for each city
const customMarkerIcons = {
  "Trinidad and Tobago": new L.Icon({
    iconUrl: trinidadIcon,
    iconSize: [60, 60],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
  "Barbados": new L.Icon({
    iconUrl: barbadosIcon,
    iconSize: [60, 60],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
  "Jamaica": new L.Icon({
    iconUrl: jamaicaIcon,
    iconSize: [60, 60],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
   "Cuba": new L.Icon({
    iconUrl: cubaIcon, 
    iconSize: [60, 60],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
   "Dominican Republic": new L.Icon({
    iconUrl: drIcon, 
    iconSize: [60, 60],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
   "Haiti": new L.Icon({
    iconUrl: haitiIcon, 
    iconSize: [60, 60],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
   "Bahamas": new L.Icon({
    iconUrl: bahamasIcon, 
    iconSize: [60, 60],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
   "Puerto Rico": new L.Icon({
    iconUrl: puertoricoIcon, 
    iconSize: [60, 60],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
   "Guyana": new L.Icon({
    iconUrl: guyanaIcon, 
    iconSize: [60, 60],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
};

const MapComponent = () => {
  const mapTilerApiKey = 'A8tTZzhY1wOV3ufAtDq2';

  return (
    <MapContainer center={[15, -70]} zoom={6} style={{ height: '100vh', width: '100%' }}>
      {/* Use MapTiler API for custom map tiles */}
      <TileLayer
        url={`https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=${mapTilerApiKey}`}
        attribution="&copy; MapTiler, &copy; OpenStreetMap contributors"
        minZoom={5} 
        maxZoom={10} 
      />

      {/* Render markers with custom marker icons and styled popups */}
      {placesData.map(place => (
        <Marker position={place.coordinates} icon={customMarkerIcons[place.name]} key={place.name}>
          <Popup>
            <div style={{ textAlign: 'center' }}>
              <h2>{place.name}</h2>
              <p>{place.foodInfo}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
