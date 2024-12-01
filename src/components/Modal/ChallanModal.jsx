// ChallanModal.js
import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import Challan from "../../assets/images/challan.jpeg";
// import New from "../../assets/images/myimg.jpg";

const ChallanModal = ({ open, onClose, chalanImage , studentImage}) => (
  <Modal open={open} onClose={onClose}>
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        maxWidth: 500,
        maxHeight: "90vh",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 3,
        overflowY: "auto",
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" component="h2" gutterBottom textAlign="center">
        Challan & Student Image
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mb: 2 }}>
        <Box sx={{ textAlign: "center", flex: "1 1 60%", marginRight: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            Challan Image
          </Typography>
          <img
            src={chalanImage}
            alt="Challan"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Box>
        <Box sx={{ textAlign: "center", flex: "1 1 35%" }}>
          <Typography variant="subtitle1" gutterBottom>
            Student Image
          </Typography>
          <img
            src={studentImage}
            alt="Student"
            style={{
              width: "200px",
            //   height: "130px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        </Box>
      </Box>
      <Button onClick={onClose} sx={{ mt: 2, display: "block", mx: "auto" }} variant="contained" color="primary">
        Close
      </Button>
    </Box>
  </Modal>
);

export default ChallanModal;
