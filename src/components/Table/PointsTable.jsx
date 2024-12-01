import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const RouteTable = ({ routePoints, onEdit }) => (
  <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
    <Table sx={{ minWidth: 650 }} aria-label="route table">
      <TableHead>
        <TableRow sx={{ backgroundColor: '#388e3c' }}>
          <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
          <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Point Name</TableCell>
          <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Description</TableCell>
          <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Edit</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {routePoints.map((point, index) => (
          <TableRow
            key={point.id}
            sx={{
              backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white',
              '&:hover': { backgroundColor: '#d0f0c0',cursor:"pointer" },
              transition: 'background-color 0.3s',
            }}
          >
            <TableCell align="center">
              <Typography variant="body2">{point.id}</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="body2">{point.name}</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                {point.description}
              </Typography>
            </TableCell>
            <TableCell align="center">
              <IconButton onClick={() => onEdit(point.id)} color="success">
                <EditIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default RouteTable;
