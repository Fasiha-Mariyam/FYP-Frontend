import React from "react";
import ComplainTable from "../../../components/Table/ComplainTable";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux"; // Import useSelector from react-redux

export default function Complain() {
  // Access the feedback/complaints data from Redux store
  const data = useSelector((state) => state.feedback.allFeedbacks); // Adjust the path to match your Redux state
  console.log(data, "data");

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 3 }}
      >
        Complaints and Feedback
      </Typography>
      <ComplainTable data={data} /> {/* Pass Redux data to ComplainTable */}
    </Box>
  );
}
