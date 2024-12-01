/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

const PartnerForm = ({
  handleSubmit,
  handleGoBack,
  backend,
  submittedData,
  rollNo,
  name,
  semester,
  setRollNo,
  setName,
  setSemester,
  setLocation,
  location,
  setStudentImage,
  studentImage,
  setChalaanImage,
  chalaanImage,
  loading,
}) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {backend === "waiting" ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "24px",
                color: "#111111",
                fontFamily: "Outfit",
              }}
            >
              Form submitted, wait for admin approval.
            </Typography>
          </Box>
        ) : backend === "approved" ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh", // Full viewport height to center vertically
              backgroundColor: "#e0e0e0", // Light gray background for contrast
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                p: 3,
                mx: 15,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for highlighting
                borderRadius: "12px", // Rounded corners for a modern look
                maxWidth: "500px", // Keep the card size manageable
                backgroundColor: "#fefefe", // Light card background
                border: "1px solid #ddd", // Subtle border
              }}
            >
              {/* Left Side: Student Picture */}
              <Box
                sx={{
                  flexShrink: 0,
                  mr: 2,
                }}
              >
                <img
                  src={URL.createObjectURL(submittedData.studentImage)}
                  alt="Student"
                  style={{
                    width: "120px", // Slightly larger image to match ID card style
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "8px", // Softly rounded image
                    border: "2px solid #ddd", // Subtle border around the image
                  }}
                />
              </Box>

              {/* Right Side: Text Information */}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#333", // Dark text color for visibility
                    marginBottom: "8px",
                  }}
                >
                  Name: {submittedData.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#555",
                    marginBottom: "4px",
                  }}
                >
                  Roll Number: {submittedData.rollNo}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#555",
                    marginBottom: "4px",
                  }}
                >
                  Semester: {submittedData.semester}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#555",
                    marginBottom: "4px",
                  }}
                >
                  Location: {submittedData.location}
                </Typography>
              </Box>
            </Card>
          </Box>
        ) : backend === "rejected" ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "24px",
                color: "#111111",
                fontFamily: "Outfit",
              }}
            >
              Form has been rejected , fill the form again
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                my: 2,
                "&:hover": {
                  backgroundColor: "darkred",
                },
              }}
              onClick={handleGoBack}
            >
              Go Back To Form
            </Button>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                mt: 2,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 450,
                  fontSize: "24px",
                  color: "#111111",
                  fontFamily: "Outfit",
                }}
              >
                Create Request
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "5px",
                backgroundColor: "rgb(103 196 119)",
                my: 2,
                boxShadow:
                  " 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
              }}
            >
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                  width: "100%",
                  padding: "30px",
                  display: "flex",
                  flexDirection: { sm: "column", xs: "column" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { md: "row", sm: "column", xs: "column" },
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  {/* Name and Roll Number */}
                  <Box
                    sx={{
                      width: { md: "48%", sm: "100%", xs: "100%" },
                    }}
                  >
                    <InputLabel
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontFamily: "Outfit",
                      }}
                    >
                      Name
                    </InputLabel>
                    <TextField
                      sx={{
                        mt: 1,
                        mb: 2,
                        fontFamily: "Outfit",
                        width: { md: "100%", sm: "100%", xs: "100%" },
                        backgroundColor: "#F9FAFB",
                        "& label.Mui-focused": {
                          color: "rgb(103, 196, 119)",
                        },
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "rgb(103, 196, 119)",
                          },
                        },
                      }}
                      placeholder="Name"
                      margin="normal"
                      autoComplete="off"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      size="large"
                    />
                  </Box>
                  <Box
                    sx={{
                      width: { md: "48%", sm: "100%", xs: "100%" },
                    }}
                  >
                    <InputLabel
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontFamily: "Outfit",
                      }}
                    >
                      Roll Number
                    </InputLabel>
                    <TextField
                      sx={{
                        mt: 1,
                        mb: 2,
                        fontFamily: "Outfit",
                        width: { md: "100%", sm: "100%", xs: "100%" },
                        backgroundColor: "#F9FAFB",
                        "& label.Mui-focused": {
                          color: "rgb(103, 196, 119)",
                        },
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "rgb(103, 196, 119)",
                          },
                        },
                      }}
                      placeholder="Roll Number"
                      margin="normal"
                      autoComplete="off"
                      value={rollNo}
                      onChange={(e) => setRollNo(e.target.value)}
                      id="rollNo"
                      size="large"
                    />
                  </Box>
                </Box>
                {/* Semester and Location */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { md: "row", sm: "column", xs: "column" },
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: { md: "48%", sm: "100%", xs: "100%" },
                    }}
                  >
                    <InputLabel
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontFamily: "Outfit",
                      }}
                    >
                      Semester
                    </InputLabel>
                    <TextField
                      sx={{
                        mt: 1,
                        mb: 2,
                        fontFamily: "Outfit",
                        width: { md: "100%", sm: "100%", xs: "100%" },
                        backgroundColor: "#F9FAFB",
                        "& label.Mui-focused": {
                          color: "rgb(103, 196, 119)",
                        },
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "rgb(103, 196, 119)",
                          },
                        },
                      }}
                      placeholder="Semester"
                      margin="normal"
                      autoComplete="off"
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                      id="semester"
                      size="large"
                    />
                  </Box>
                  <Box
                    sx={{
                      width: { md: "48%", sm: "100%", xs: "100%" },
                    }}
                  >
                    <InputLabel
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontFamily: "Outfit",
                      }}
                    >
                      Location
                    </InputLabel>
                    <TextField
                      sx={{
                        mt: 1,
                        mb: 2,
                        fontFamily: "Outfit",
                        width: { md: "100%", sm: "100%", xs: "100%" },
                        backgroundColor: "#F9FAFB",
                        "& label.Mui-focused": {
                          color: "rgb(103, 196, 119)",
                        },
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "rgb(103, 196, 119)",
                          },
                        },
                      }}
                      placeholder="Location"
                      margin="normal"
                      autoComplete="off"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      id="location"
                      size="large"
                    />
                  </Box>
                </Box>
                {/* images upload */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: { md: "row", sm: "column", xs: "column" },
                    width: "100%",
                  }}
                >
                  {/* Student Image */}
                  <Box
                    sx={{
                      mt: 2,
                      width: { md: "48%", sm: "100%", xs: "100%" },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <InputLabel
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontFamily: "Outfit",
                        mb: 1,
                      }}
                    >
                      Upload Student Image
                    </InputLabel>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setStudentImage(e.target.files[0])}
                      style={{ display: "none" }}
                      id="student-image-input"
                    />
                    <label htmlFor="student-image-input">
                      <Button
                        variant="contained"
                        component="span"
                        sx={{
                          mt: 1,
                          background: "rgb(41 140 58)",
                          color: "#FFF",
                          "&:hover": {
                            background: "rgb(103, 196, 119)",
                          },
                        }}
                      >
                        Select Image
                      </Button>
                    </label>
                    {studentImage && (
                      <img
                        src={URL.createObjectURL(studentImage)}
                        alt="Student"
                        style={{
                          maxWidth: "100%",
                          marginTop: "10px",
                          height: "auto",
                          maxHeight: "100px",
                        }}
                      />
                    )}
                  </Box>
                  {/* Chalaan Image */}
                  <Box
                    sx={{
                      mt: 2,
                      width: { md: "48%", sm: "100%", xs: "100%" },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <InputLabel
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontFamily: "Outfit",
                        mb: 1,
                      }}
                    >
                      Upload Chalaan Image
                    </InputLabel>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setChalaanImage(e.target.files[0])}
                      style={{ display: "none" }}
                      id="chalaan-image-input"
                    />
                    <label htmlFor="chalaan-image-input">
                      <Button
                        variant="contained"
                        component="span"
                        sx={{
                          mt: 1,
                          background: "rgb(41 140 58)",
                          color: "#FFF",
                          "&:hover": {
                            background: "rgb(103, 196, 119)",
                          },
                        }}
                      >
                        Select Image
                      </Button>
                    </label>
                    {chalaanImage && (
                      <img
                        src={URL.createObjectURL(chalaanImage)}
                        alt="Chalaan"
                        style={{
                          maxWidth: "100%",
                          marginTop: "10px",
                          height: "auto",
                          maxHeight: "100px",
                        }}
                      />
                    )}
                  </Box>
                </Box>

                {/* Button */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    sx={{
                      mt: 2,
                      mb: 2,
                      background: "rgb(41 140 58)",
                      color: "#FFF",
                      "&:hover": {
                        background: "rgb(103, 196, 119)",
                      },
                      fontFamily: "Outfit",
                    }}
                  >
                    {loading ? (
                      <CircularProgress
                        color="inherit"
                        size="1rem"
                        sx={{ mr: 2 }}
                      />
                    ) : (
                      ""
                    )}
                    Submit
                  </Button>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default PartnerForm;
