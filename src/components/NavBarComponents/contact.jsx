import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import image from "../../assets/images/contactimg.jpeg"; 
import "./contact.css";

const Contact = () => {
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
        Contact Us
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ marginTop: "60px" }}>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", alignItems: "stretch" }}
          >
            <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
              <Card
                sx={{
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  padding: "20px",
                  height: "100%", // Make sure the card takes the full height
                  display: "flex", // Flexbox for the card content
                  flexDirection: "column", // Ensures the button stays at the bottom
                  justifyContent: "space-between", // Push content to top and bottom
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ marginTop: "20px", fontFamily: "Roboto" }}
                  >
                    Connect with us
                  </Typography>
                  <Grid container spacing={2}>
                    {/* Contact details and icons */}
                    <Grid item xs={12}>
                      <TextField
                        label="Name"
                        fullWidth
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "white",
                              borderRadius: 5,
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "white",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Email"
                        fullWidth
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "white",
                              borderRadius: 5,
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "white",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Message"
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "white",
                              borderRadius: 5,
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "white",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                          backgroundColor: "green",
                          height: "30px",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "darkgreen", // Adjust hover color
                            cursor: "pointer", // Change cursor to pointer on hover
                          },
                        }}
                      >
                        Send
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ display: "flex", alignItems: "stretch" }}
            >
              <img
                src={image}
                alt="Contact Image"
                style={{
                  width: "100%",
                  height: "100%", // Make sure the image takes the full height
                  objectFit: "cover", // Adjust the fit as needed
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
