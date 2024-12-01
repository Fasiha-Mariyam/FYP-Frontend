// ShareLocation.js
import React, { useState, useEffect } from 'react';
import PointsList from '../../../components/DriverComponents/PointList';
import PointLocation from '../../../components/DriverComponents/PointLocation';

export default function ShareLocation() {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [driverLocation, setDriverLocation] = useState(null);

  const handleSelectPoint = (point) => {
    setSelectedPoint(point);
  };

  // Use the browser's geolocation API to track location
  useEffect(() => {
    if (selectedPoint) {
      const geoWatch = navigator.geolocation.watchPosition(
        (position) => {
          setDriverLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => console.error("Error tracking location:", error),
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
      );

      // Clean up the geolocation watch when the component unmounts
      return () => navigator.geolocation.clearWatch(geoWatch);
    }
  }, [selectedPoint]);

  return (
    <div>
      {!selectedPoint ? (
        <PointsList onSelectPoint={handleSelectPoint} />
      ) : (
        <PointLocation selectedPoint={selectedPoint} driverLocation={driverLocation} />
      )}
    </div>
  );
}
