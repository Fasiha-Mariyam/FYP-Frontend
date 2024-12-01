// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardContent } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Dashboard() {
  const navigate = useNavigate();

  const cardStyle = {
    width: '300px',
    margin: '10px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 24px rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 10,
        backgroundColor: '#f5f5f5',
        padding: '20px',
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 'bold',
          color: '#2A8D3B',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        Driver Dashboard
      </Typography>
      <Typography variant="h5" sx={{ color: '#555', textAlign: 'center', marginBottom: '20px' }}>
        Select an option to share your location.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <Card sx={cardStyle} onClick={() => navigate('/driver/share-location')}>
    

          <CardContent>
          <LocationOnIcon fontSize="large" />
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Share Location
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              Select a point to start sharing your location in real-time.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
