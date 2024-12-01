// ConfirmationModal.js
import React from "react";
import { Modal, Box, Paper, Typography, Button } from "@mui/material";

const ConfirmationModal = ({ open, onClose, onConfirm }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="confirmation-modal-title"
      aria-describedby="confirmation-modal-description"
    >
      <Box
        component={Paper}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: 3,
          width: 300,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography id="confirmation-modal-title" variant="h6" component="h2">
          Are you sure?
        </Typography>
        <Typography id="confirmation-modal-description" sx={{ mt: 2 }}>
          This will reset all statuses to Pending.
        </Typography>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            onClick={onConfirm}
            sx={{ bgcolor: "green", color: "white" ,  "&:hover": {
                bgcolor: "darkgreen",
              },}}
          >
            Yes
          </Button>
          <Button
            onClick={onClose}
            sx={{ color: "white",background:"red", "&:hover": {
                bgcolor: "darkred",
              }, }}
          >
            No
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
