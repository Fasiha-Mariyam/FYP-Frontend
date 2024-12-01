import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

export default function PointTracking() {
  const [userLocation, setUserLocation] = useState(null); // User's location
  const [pointLocation, setPointLocation] = useState(null); // Current selected point's location
  const [selectedPoint, setSelectedPoint] = useState(null); // Selected point index
  const [eta, setEta] = useState('');
  const [distance, setDistance] = useState('');
  const [open, setOpen] = useState(false);
  const mapRef = useRef(null);
  const routeControl = useRef(null);

  const points = [
    { id: 1, location: [24.8607, 67.0011] },
    { id: 2, location: null },
    { id: 3, location: [24.8503, 67.0222] },
    { id: 4, location: [24.8600, 67.0101] },
    { id: 5, location: [24.9307, 67.0782] },
    { id: 6, location: null },
    { id: 7, location: [24.9003, 67.0842] },
    { id: 8, location: [24.8704, 67.0745] },
    { id: 9, location: null },
    { id: 10, location: [24.8994, 67.0421] },
  ];
console.log("selected point",pointLocation);

  const pointSpeed = 50; // Assume 50 km/h as the point's speed

  useEffect(() => {
    // Initialize map only once
    const initializeMap = () => {
      if (mapRef.current || !userLocation) return;

      const mapInstance = L.map('map');
      mapRef.current = mapInstance;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapInstance);

      const validPoints = points
        .filter((point) => point.location !== null)
        .map((point) => L.latLng(...point.location));

      if (validPoints.length > 0) {
        const bounds = L.latLngBounds(validPoints);
        mapInstance.fitBounds(bounds, { padding: [50, 50] });
      } else {
        mapInstance.setView(userLocation, 10);
      }
    };

    initializeMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [userLocation]); // Run only when userLocation changes

  useEffect(() => {
    // Update the map with route control when userLocation or pointLocation changes
    if (!mapRef.current || !userLocation || !pointLocation) return;

    // Clear previous route if exists
    if (routeControl.current) {
      mapRef.current.removeControl(routeControl.current);
    }

    const { distance, eta } = calculateDistanceAndETA(userLocation, pointLocation);
    setDistance(distance);
    setEta(eta);

    routeControl.current = L.Routing.control({
      waypoints: [
        L.latLng(userLocation[0], userLocation[1]),
        L.latLng(pointLocation[0], pointLocation[1]),
      ],
      routeWhileDragging: true,
      geocoder: L.Control.Geocoder.nominatim(),
    }).addTo(mapRef.current);
  }, [userLocation, pointLocation]); // Re-run when userLocation or pointLocation changes

  const handlePointSelection = (event) => {
    const pointId = Number(event.target.value);
    setSelectedPoint(pointId);

    const selected = points.find((p) => p.id === pointId);
    setPointLocation(selected ? selected.location : null);
  };

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
        setOpen(true);
      },
      (error) => {
        alert('Error fetching location: ' + error.message);
      }
    );
  };

  const calculateDistanceAndETA = (userLoc, pointLoc) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Earth's radius in km

    const dLat = toRad(pointLoc[0] - userLoc[0]);
    const dLon = toRad(pointLoc[1] - userLoc[1]);

    const lat1 = toRad(userLoc[0]);
    const lat2 = toRad(pointLoc[0]);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in km
    const timeInHours = distance / pointSpeed;
    const hours = Math.floor(timeInHours);
    const minutes = Math.round((timeInHours - hours) * 60);

    return {
      distance: distance.toFixed(2), // in km
      eta: `${hours} hour(s) and ${minutes} minute(s)`,
    };
  };

  const startTracking = () => {
    if (selectedPoint === null) {
      alert('Please select a point.');
      return;
    }

    if (!pointLocation) {
      setEta(`Point ${selectedPoint} has not departed yet.`);
      setOpen(false);
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    // Simulate location change for the selected point every 15 seconds
    const intervalId = setInterval(() => {
      const validPoints = points.filter((point) => point.location !== null);
      if (validPoints.length === 0) return;

      // Randomly select a point with a location to simulate its movement
      const randomPoint = validPoints[Math.floor(Math.random() * validPoints.length)];
      setPointLocation(randomPoint.location); // Update pointLocation
    }, 15000); // 15 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <div id="map" style={{ height: '100%' }}></div>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Select Point to Track</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel>Select a Point</InputLabel>
            <Select
              onChange={handlePointSelection}
              value={selectedPoint !== null ? selectedPoint : ''}
            >
              <MenuItem value="" disabled>
                Select a point
              </MenuItem>
              {points.map((point) => (
                <MenuItem key={point.id} value={point.id}>{`Point ${point.id}`}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={startTracking} color="primary">
            Start Tracking
          </Button>
        </DialogActions>
      </Dialog>

      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          padding: '10px',
          backgroundColor: 'white',
          borderRadius: '4px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
        }}
      >
        {distance && <p>Distance: {distance} km</p>}
        {eta && <p>ETA: {eta}</p>}
      </div>
    </div>
  );
}
