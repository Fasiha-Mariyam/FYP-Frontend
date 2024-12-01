// GOOGLE wlaa code 

// import React, { useEffect, useState } from 'react';
// import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

// export default function PointLocation({ selectedPoint }) {
//   const [location, setLocation] = useState(null);
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyD9GZLASLLVr9fEZBUnYVZrI3xPYg71VCw", // Replace with your Google Maps API key
//   });

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         () => alert('Unable to retrieve your location'),
//         { enableHighAccuracy: true }
//       );
//     } else {
//       alert('Geolocation is not supported by your browser');
//     }
//   }, []);

//   if (!isLoaded) return <div>Loading Map...</div>;

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h2>{selectedPoint} - Current Location</h2>
//       {location ? (
//         <GoogleMap
//           center={location}
//           zoom={15}
//           mapContainerStyle={{ width: '100%', height: '400px' }}
//         >
//           <Marker position={location} />
//         </GoogleMap>
//       ) : (
//         <p>Getting location...</p>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function PointLocation({ selectedPoint }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => alert('Unable to retrieve your location'),
        { enableHighAccuracy: true }
      );
    } else {
      alert('Geolocation is not supported by your browser');
    }
  }, []);

  if (!location) return <div>Loading Map...</div>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{selectedPoint} - Current Location</h2>
      <MapContainer
        center={location}
        zoom={15}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={location}>
          <Popup>Your current location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
