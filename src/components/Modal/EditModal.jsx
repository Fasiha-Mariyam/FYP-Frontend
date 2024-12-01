import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';

const EditModal = ({ open, onClose, point, onSave }) => {
  const [newPoint, setNewPoint] = useState({ name: point.name, description: point.description });

  const handleSave = () => {
    onSave(point.id, newPoint);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Edit Route Point
        </Typography>
        <TextField
          label="Point Name"
          fullWidth
          margin="normal"
          value={newPoint.name}
          onChange={(e) => setNewPoint({ ...newPoint, name: e.target.value })}
        />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          value={newPoint.description}
          onChange={(e) => setNewPoint({ ...newPoint, description: e.target.value })}
          multiline // Enable multiline input
          rows={10} // Set number of visible rows
          variant="outlined" // Use outlined variant for better aesthetics
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: '#388e3c',
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: '#66bb6a',
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: '#66bb6a',
            },
          }}
        />
        <Button variant="contained" color="success" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default EditModal;
