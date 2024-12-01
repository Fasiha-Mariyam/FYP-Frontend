import React, { useState } from "react";
import { Box, TextField, Button, Typography, MenuItem } from "@mui/material";
import { useSnackbar } from "notistack"; // Import useSnackbar from notistack

export default function FeedbackForm() {
  const { enqueueSnackbar } = useSnackbar(); // Initialize Snackbar hook
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Feedback", 
    message: "",
  });
  const [loading, setLoading] = useState(false); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validation checks
      if (
        !formData.name ||
        !formData.email ||
        !formData.message
      ) {
        enqueueSnackbar(`Please fill all the required fields`, {
          autoHideDuration: 3000,
          variant: "warning",
        });
        return;
      } else if (/^\d/.test(formData.name)) {
        enqueueSnackbar(`Name should not start with a number`, {
          autoHideDuration: 3000,
          variant: "warning",
        });
        return;
      } else if (!formData.email.includes("@")) {
        enqueueSnackbar(`Please enter a valid email address`, {
          autoHideDuration: 3000,
          variant: "warning",
        });
        return;
      } else {
        setLoading(true);

        setTimeout(() => {
          setLoading(false);
          enqueueSnackbar(`Request submitted successfully`, {
            autoHideDuration: 3000,
            variant: "success",
          });

          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            type: "Feedback",
            message: "",
          });
        }, 2000); // Simulate a 2-second delay for submission
      }
    } catch (error) {
      setLoading(false);
      enqueueSnackbar(`Request not submitted successfully`, {
        autoHideDuration: 3000,
        variant: "error",
      });
      console.error(error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 2, fontWeight: "bold", color: "#2A8D3B" }}
      >
        Feedback / Complaint Form
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        label="Type"
        name="type"
        value={formData.type}
        onChange={handleChange}
        select
        fullWidth
        sx={{ mb: 2 }}
      >
        <MenuItem value="Feedback">Feedback</MenuItem>
        <MenuItem value="Complaint">Complaint</MenuItem>
      </TextField>

      <TextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        sx={{ mb: 2 }}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "rgb(42, 141, 58)",
          color: "#fff",
          "&:hover": {
            backgroundColor: "rgba(42, 141, 58, 0.8)",
          },
        }}
        fullWidth
      >
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </Box>
  );
}
