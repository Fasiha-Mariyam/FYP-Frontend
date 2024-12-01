import React from "react";
import { Container, Grid, Typography, CardContent, useMediaQuery } from "@mui/material";
import "./about.css";
import image from "../../assets/images/aboutUsimg.jpeg";

function AboutUsPage() {

  const less900 = useMediaQuery("(max-width:600px)");

  return (
    <Grid container spacing={5} sx={{ mb: 5}}>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          className="green-heading underline"
          sx={{
            fontFamily: "Roboto",
            fontWeight: "bold",
            textAlign: "center",
            mt:15
          }}
        >
          About Us
        </Typography>
        <Grid
          container
          spacing={0}
          sx={{
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          {/* Image Grid Item */}
          <Grid item xs={12} sm={6}>
            <img
              src={image}
              alt="Duet Smart Travel Project 2"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
          </Grid>
          {/* Content Grid Item */}
          <Grid item xs={12} sm={6}>
            <CardContent>
              <Typography
                variant="h5"
                className="animated-heading"
                style={{ fontFamily: "Roboto", marginBottom: "10px" }}
              >
                About the DUET TRANSIT TRACKER
              </Typography>
              <Typography variant="body1">
                Transportation is a cornerstone of campus life at Duet
                University, acknowledged by both the administration and the
                student body. Recognizing the growing need for faster, more
                adaptable, and user-friendly mobility solutions, the initiation
                of The Duet Smart Travel Project marks a significant step
                towards transforming transportation within the university
                premises.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutUsPage;
