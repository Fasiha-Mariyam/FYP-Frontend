import React, { useState, useEffect } from 'react';
import {dispatch }from "../../../redux/store"
import PointsList from '../../../components/DriverComponents/PointList';
import PointLocation from '../../../components/DriverComponents/PointLocation';
import { setPointLocation } from '../../../redux/slices/tracking'; // Update the path as per your project structure

export default function ShareLocation() {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [driverLocation, setDriverLocation] = useState(null);

  const handleSelectPoint = (point) => {
    setSelectedPoint(point);
  };

  useEffect(() => {
    if (selectedPoint) {
      const geoWatch = navigator.geolocation.watchPosition(
        (position) => {
          setDriverLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
  
          // Dispatch the location to Redux
          dispatch(
            setPointLocation(
              selectedPoint.id,
              position.coords.latitude,
              position.coords.longitude
            )
          );
        },
        (error) => console.error("Error tracking location:", error),
        {
          enableHighAccuracy: true,
          maximumAge: 0, // Do not use cached positions
          timeout: 30000, // 30 seconds timeout
        }
      );
  
      return () => navigator.geolocation.clearWatch(geoWatch);
    }
  }, [selectedPoint, dispatch]);
  

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
