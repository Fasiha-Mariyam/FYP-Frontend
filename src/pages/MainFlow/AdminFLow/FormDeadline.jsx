// FormDeadline.js
import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { useSnackbar } from "notistack";
import ConfirmationModal from "../../../components/Modal/ConfirmationModal"; // Import the new modal component
import { changeAllStatusesToPending } from "../../../redux/slices/card";
import { dispatch } from "../../../redux/store";

export default function FormDeadline() {
  const { enqueueSnackbar } = useSnackbar();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [accessType, setAccessType] = useState("all");
  const [openModal, setOpenModal] = useState(false); // State for modal

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic to validate dates
    if (!startDate || !endDate) {
      enqueueSnackbar("Please set both start and end dates.", {
        autoHideDuration: 3000,
        variant: "error",
      });
      return;
    }

    const currentDate = new Date();
    const end = new Date(endDate);

    if (currentDate > end) {
      setAccessType("rejected");
      enqueueSnackbar(
        "The deadline has passed. Access is now for rejected applications only.",
        {
          autoHideDuration: 3000,
          variant: "info",
        }
      );
    } else {
      setAccessType("all");
    }

    console.log({
      startDate,
      endDate,
      accessType,
    });

    enqueueSnackbar("Request submitted successfully", {
      autoHideDuration: 3000,
      variant: "success",
    });
  };

  // Function to handle resetting the form
  const handleResetForm = () => {
    setStartDate("");
    setEndDate("");
    setAccessType("all"); // Reset to default access type
    enqueueSnackbar("Form reset for New Semester ", {
      autoHideDuration: 3000,
      variant: "success",
    });
    dispatch(changeAllStatusesToPending());
    setOpenModal(false); // Close modal
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#fff",
          padding: "20px",
          boxShadow: 3,
          width: "400px",
        }}
      >
        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
          Set Form Deadline
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Start Date"
            type="date"
            variant="outlined"
            fullWidth
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            sx={{ mb: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="End Date"
            type="date"
            variant="outlined"
            fullWidth
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            sx={{ mb: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Typography variant="h6" sx={{ mb: 1 }}>
            Access Type:
          </Typography>
          <RadioGroup
            row
            value={accessType}
            onChange={(e) => setAccessType(e.target.value)}
          >
            <FormControlLabel
              value="all"
              control={
                <Radio
                  sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
                />
              }
              label="Open for all students"
            />
            <FormControlLabel
              value="rejected"
              control={
                <Radio
                  sx={{ color: "green", "&.Mui-checked": { color: "green" } }}
                />
              }
              label="Open for rejected applications"
            />
          </RadioGroup>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              mt: 5,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "green",
                color: "white",
                textTransform: "none",
                width: "100%", // Set width to 100%
                "&:hover": {
                  bgcolor: "darkgreen",
                },
              }}
            >
              Set Deadline
            </Button>
            <Button
              onClick={() => setOpenModal(true)} // Open modal on click
              sx={{
                background: "red",
                color: "white",
                textTransform: "none",
                mt: 2,
                width: "100%", // Set width to 100%
                "&:hover": {
                  bgcolor: "darkred",
                },
              }}
            >
              Reset Form for New Semester
            </Button>
          </Box>
        </form>
      </Box>

      {/* Use the ConfirmationModal component */}
      <ConfirmationModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={handleResetForm}
      />
    </Box>
  );
}
