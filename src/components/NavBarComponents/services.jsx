import React from "react";
import { Container, Grid, Typography, Card, CardContent } from "@mui/material";
import image1 from "../../assets/images/smartcard.jpeg";
import image2 from "../../assets/images/chatbotimg.jpg";
import image3 from "../../assets/images/gpsimg.jpg";
import image4 from "../../assets/images/complain.png";

import "./services.css";

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: 0, margin: 0 }}>
      <Typography
        variant="h3"
        className="green-heading underline"
        style={{
          fontFamily: "Roboto",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        Our Services
      </Typography>
      <Grid container spacing={2}>
        {/* Service Cards */}
        <Grid item xs={12} sx={{ marginTop: "60px" }}>
          <Grid container spacing={2}>
            {/* Adjust grid item breakpoints for responsiveness */}
            <Grid item xs={12} sm={6} md={4} lg={3} className="service-card">
              <Card sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <img
                  src={image1}
                  alt="Service 1"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className="animated-heading"
                    style={{ fontFamily: "Roboto", marginBottom: "10px" }}
                  >
                    Smart Card Registration
                  </Typography>
                  <Typography variant="body2">
                    Offer a system for students to register their ID cards
                    quickly and efficiently, providing them with digital cards
                    that are easy to operate.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} className="service-card">
              <Card sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <img
                  src={image2}
                  alt="Service 2"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className="animated-heading"
                    style={{ fontFamily: "Roboto", marginBottom: "10px" }}
                  >
                    Integration of ChatBot
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vulputate porttitor augue vel feugiat.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} className="service-card">
              <Card sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <img
                  src={image3}
                  alt="Service 3"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className="animated-heading"
                    style={{ fontFamily: "Roboto", marginBottom: "10px" }}
                  >
                    Real-Time Point Tracking
                  </Typography>
                  <Typography variant="body2">
                    Implement GPS tracking technology to track buses in
                    real-time, allowing students to monitor the location and
                    arrival times of buses accurately.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} className="service-card">
              <Card sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <img
                  src={image4}
                  alt="Service 4"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className="animated-heading"
                    style={{ fontFamily: "Roboto", marginBottom: "10px" }}
                  >
                    Complaint Handling
                  </Typography>
                  <Typography variant="body2">
                    Provide students with a platform to submit feedback and
                    complaints regarding transportation services.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
