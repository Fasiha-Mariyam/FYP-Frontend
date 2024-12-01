import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  TextField,
} from "@mui/material";

const routeData = [
  {
    title: "Point 1",
    details:
      "via Model Mor, Malir Halt, Colony Gate, Nata Khan Bridge, Drigh Road Station, PAF Base Faisal, Laal Kothi, Karsaz, Nursery, FTC, Regent Plaza, Metropole, Fawwara Chowk, Arts Council, Shaheen Complex, I.I.Chundrigar, Tower, Fisheries, and Dockyard",
  },
  { title: "Point 2", details: "Route details for Point 2" },
  { title: "Point 3", details: "Route details for Point 3" },
  { title: "Point 4", details: "Route details for Point 4" },
  { title: "Point 5", details: "Route details for Point 5" },
  { title: "Point 6", details: "Route details for Point 6" },
  {
    title: "Point 7",
    details: "Powerhouse , naagin , shadman , hyderi , imtiaz",
  },
  { title: "Point 8", details: "Route details for Point 8" },
  { title: "Point 9", details: "Route details for Point 9" },
  { title: "Point 10", details: "Route details for Point 10" },
];

export default function PointInformation() {
  const [activeIndices, setActiveIndices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  const filteredRoutes = routeData.filter(
    (route) =>
      route.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cardStyle = {
    margin: "10px",
    width: "300px",
    minHeight: "150px", // Set a minimum height for consistency
    position: "relative",
    transition: "box-shadow 0.3s ease, transform 0.3s ease", // Add transition for transform
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    border: "2px solid #757575", // Darker border color
    borderRadius: "8px", // Optional: Add rounded corners
    "&:hover": {
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Enhanced box shadow
      transform: "translateY(-2px)", // Slight lift effect on hover
    },
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <TextField
        variant="outlined"
        placeholder="Search your area..."
        fullWidth
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: "20px" }} // Add margin at the bottom
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start", // Prevents cards from stretching to the same height
        }}
      >
        {filteredRoutes.map((route, index) => (
          <Card key={index} sx={cardStyle}>
            <CardContent sx={{ textAlign: "center" }}>
              {" "}
              {/* Center text in CardContent */}
              <Typography variant="h6" component="div">
                {route.title}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgb(42, 141, 58)", // Custom button color
                  color: "#fff", // Button text color
                  "&:hover": {
                    backgroundColor: "rgba(42, 141, 58, 0.8)", // Darker shade on hover
                  },
                  marginTop: "30px",
                }}
                onClick={() => handleToggle(index)}
              >
                View Route
              </Button>
              {/* Render the details if the index is in activeIndices */}
              {activeIndices.includes(index) && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ marginTop: "10px" }}
                >
                  {route.details}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
