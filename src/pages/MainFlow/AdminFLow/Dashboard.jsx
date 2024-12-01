// AdminDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardContent } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import LockClockIcon from '@mui/icons-material/LockClock';

export default function AdminDashboard() {
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
        Admin Dashboard
      </Typography>

      <Typography variant="h5" sx={{ color: '#555', textAlign: 'center', marginBottom: '20px' }}>
        Select an option to manage the system.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          padding: '20px',
        }}
      >

        <Card sx={cardStyle} onClick={() => navigate('/admin/cardRequest')}>
          <CardContent>
            <CreditCardIcon fontSize="large" />
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Card Requests
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              Manage and approve student card requests.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={cardStyle} onClick={() => navigate('/admin/routeInfo')}>
          <CardContent>
            <DirectionsBusOutlinedIcon fontSize="large" />
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Update Route
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              Edit and update university bus routes.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={cardStyle} onClick={() => navigate('/admin/complain')}>
          <CardContent>
            <FeedbackOutlinedIcon fontSize="large" />
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Complaints
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              View and respond to student complaints.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={cardStyle} onClick={() => navigate('/admin/formDeadline')}>
          <CardContent>
            <LockClockIcon fontSize="large" />
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Form Deadline
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              Set and update deadlines for form submissions.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
