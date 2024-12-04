import React, { useState } from "react";
import { Box, TextField, Button, Typography, MenuItem } from "@mui/material";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { submitFeedback } from "../../../redux/slices/feedback";

export default function FeedbackForm() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    type: "feedback",
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
      if (!formData.email || !formData.message) {
        enqueueSnackbar("Please fill all the required fields", {
          variant: "warning",
        });
        return;
      } else if (!formData.email.includes("@")) {
        enqueueSnackbar("Please enter a valid email address", {
          variant: "warning",
        });
        return;
      }

      setLoading(true);

      const result = await dispatch(submitFeedback(formData)); // Await the result

      console.log(result, "result"); // Debugging

      if (result.success) {
        enqueueSnackbar("Request submitted successfully", {
          variant: "success",
        });
        setFormData({  email: "", type: "feedback", message: "" });
      } else {
        enqueueSnackbar("Request not submitted successfully", {
          variant: "error",
        });
      }
    } catch (error) {
      enqueueSnackbar("Something went wrong", { variant: "error" });
    } finally {
      setLoading(false);
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
        sx={{ mb: 2, fontWeight: "bold", color: "#2A8D3B" }}
      >
        Feedback / Complaint Form
      </Typography>

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
        <MenuItem value="feedback">Feedback</MenuItem>
        <MenuItem value="complaint">Complaint</MenuItem>
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
