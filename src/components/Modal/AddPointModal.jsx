import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import { useSnackbar } from "notistack";

const AddPointModal = ({ open, onClose, onSave }) => {
  const [newPoint, setNewPoint] = useState({ name: "", description: "" });
  const { enqueueSnackbar } = useSnackbar();

  const handleAdd = () => {
    if (newPoint.name.trim() && newPoint.description.trim()) {
      onSave(newPoint);
      setNewPoint({ name: "", description: "" });
      onClose();
    } else {
      enqueueSnackbar("Please fill in both fields before adding the point.", { 
        variant: "warning",
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "#d0f0c0",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Add New Route Point
        </Typography>
        <TextField
          label="Point Name"
          fullWidth
          margin="normal"
          value={newPoint.name}
          onChange={(e) => setNewPoint({ ...newPoint, name: e.target.value })}
          sx={{
            bgcolor: "white",
            borderRadius: 1,
          }}
        />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          value={newPoint.description}
          onChange={(e) =>
            setNewPoint({ ...newPoint, description: e.target.value })
          }
          multiline
          rows={4}
          sx={{
            bgcolor: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#388e3c",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#66bb6a",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#66bb6a",
            },
            borderRadius: 1,
          }}
        />
        <Button
          variant="contained"
          color="success"
          sx={{ color: "white", mt: 2 }}
          onClick={handleAdd}
        >
          Add
        </Button>
      </Box>
    </Modal>
  );
};

export default AddPointModal;
