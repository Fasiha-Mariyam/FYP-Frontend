import React from "react";
import ComplainTable from "../../../components/Table/ComplainTable";
import { Box, Typography } from "@mui/material";

export default function Complain() {
  // Sample data for complaints and feedback related to DUET Transit Tracker
  const data = [
    {
      email: "student1@example.com",
      type: "complaint",
      request: "The bus schedule is not updated regularly.",
    },
    {
      email: "student2@example.com",
      type: "feedback",
      request: "I appreciate the real-time tracking feature!",
    },
    {
      email: "student3@example.com",
      type: "complaint",
      request: "Some buses are often late, causing inconvenience.",
    },
    {
      email: "student4@example.com",
      type: "feedback",
      request: "The app is user-friendly and easy to navigate.",
    },
    {
      email: "student5@example.com",
      type: "complaint",
      request: "The notifications for bus arrivals are sometimes delayed.",
    },
    {
      email: "student6@example.com",
      type: "feedback",
      request: "It would be great to have an option to provide driver ratings.",
    },
  ];

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 3 }} 
      >
        Complaints and Feedback
      </Typography>
      <ComplainTable data={data} /> {/* Pass data as props to ComplainTable */}
    </Box>
  );
}
