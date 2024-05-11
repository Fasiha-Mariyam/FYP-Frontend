

const loginRight = {
  display: "flex",
  alignItems: "center", 
  height: "80vh",
  justifyContent: "center",
  fontFamily: "Poppins",
  // position: "relative",
};

const logoImg = {
  height: 100,
  top: 55,
  mb: 6,
  display: { md: "none", sm: "block", xs: "block" },
};

const heading = {
  my: 2,
  display: "flex",
  width: { xs: "350px", md: "30vw" },
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const loginButton = {
  width: { xs: "100%", md: "max-content" },
  fontSize: { xs: "15px", md: "1vw" },
  alignSelf: "flex-end",
  bgcolor: "#000",
  color: "#fff",
  textTransform: "uppercase",
  p: "10px 20px",
  mt: { xs: 2, md: "1.4vw" },
  borderRadius: "4px",
  "&:hover": {
    bgcolor: "#000",
  },
};

const recoverPassHeading = {
  fontFamily: "Outfit",
  fontWeight: 500,
  fontSize: { xs: "18px", md: "1.5vw" },
};

const recoverPassBox = {
  textAlign: "left",
  width: { xs: "300px", md: "30vw" },
  mb: 4,
};

const modalTypeBox = {
  p: { md: 6, xs: 2 },
  py: 9,
  borderRadius: 5,
  border: "1px solid #000",
  backgroundColor: { xs: "white" },
};

export const styles = {
  loginRight,
  heading,
  loginButton,
  recoverPassHeading,
  recoverPassBox,
  modalTypeBox,
  logoImg,
};
