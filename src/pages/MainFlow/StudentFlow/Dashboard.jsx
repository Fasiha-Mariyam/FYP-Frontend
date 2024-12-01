import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import DirectionsBusOutlinedIcon from "@mui/icons-material/DirectionsBusOutlined";

export default function Dashboard() {
  const navigate = useNavigate();

  const cardStyle = {
    width: "300px", // Set a specific width for the cards
    margin: "10px", // Margin around the cards
    transition: "transform 0.3s, box-shadow 0.3s", // Animation for hover effect
    cursor: "pointer", // Pointer cursor on hover
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)", // Multiple shadows for depth
    "&:hover": {
      transform: "scale(1.05)", // Scale up effect on hover
      boxShadow:
        "0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 24px rgba(0, 0, 0, 0.2)", // Enhanced shadow effect on hover
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 10,
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: "bold",
          color: "#2A8D3B",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Welcome to Student Dashboard
      </Typography>
      <Typography
        variant="h5"
        sx={{ color: "#555", textAlign: "center", marginBottom: "20px" }}
      >
        Explore your options below.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap", // Wrap cards on smaller screens
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {/* Card for Request a Service */}
        <Card
          sx={cardStyle}
          onClick={() => navigate("/student/request")} // Navigate on card click
        >
          <CardContent>
            <CreditCardIcon fontSize="large" />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Request a Service
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              Click here to request any service you need.
            </Typography>
          </CardContent>
        </Card>

        {/* Card for Point Information */}
        <Card
          sx={cardStyle}
          onClick={() => navigate("/student/pointInformation")}
        >
          <CardContent>
            <DirectionsBusOutlinedIcon fontSize="large" />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Point Information
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              Get detailed information about points of interest.
            </Typography>
          </CardContent>
        </Card>

        {/* Card for Feedback */}
        <Card sx={cardStyle} onClick={() => navigate("/student/feedback")}>
          <CardContent>
            <FeedbackOutlinedIcon fontSize="large" />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Feedback
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              Share your thoughts and feedback with us.
            </Typography>
          </CardContent>
        </Card>

        {/* Card for Track Point */}
        <Card sx={cardStyle} onClick={() => navigate("/student/pointTracking")}>
          <CardContent>
            <DepartureBoardIcon fontSize="large" />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Track Point
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              Monitor the status of points in real-time.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
