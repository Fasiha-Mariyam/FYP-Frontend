/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import BackgroundImage from "./Background";
import Img1 from "../../assets/images/image1.jpeg";

const contentStyle = {
  padding: "15px",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifycontent: "center",
};
const imgStyle = {
  width: "100%",
  height: "50vh",
  marginTop: "40px",
  objectFit: "contained",
  mb: 2,
};
const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifycontent: "center",
  width: "100%",

};

function Header() {
  const less900 = useMediaQuery("(max-width:900px)");
  return (
    <>
      {/* Content Grid */}
      <Grid container spacing={0} style={containerStyle}>
       {less900 ? <></> : <BackgroundImage />}
        {/* Content Grid Item */}
        <Grid item xs={12} md={6} sx={contentStyle}>
          <Typography
            variant="h4"
            style={{ fontFamily: "Roboto", fontWeight: "bold", color: "black" }}
          >
            Duet Transit Tracker
          </Typography>
          <Typography variant="body1" sx={{ color: "black" }}>
            Simplify Your Experience, and Explore
            <br /> Duet Transit Tracker's Innovative Solutions.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <img
              src={Img1}
              alt="Bus parked in front of a building"
              style={imgStyle}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
