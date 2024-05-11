import React from "react";

import { Box, Typography } from "@mui/material";

const LoginTabs = ({ isAdmin, setIsAdmin, setEmail, setPassword }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: { xs: 3, md: "2vw" },
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Box
        sx={{
          bgcolor: "#F5F5F7",
          height: { xs: "50px", xl: "4vw" },
          width: { xs: "300px", md: "30vw" },
          borderRadius: { xs: "50px", md: "5vw" },
          display: "flex",
          p: "2px",
          gap: "1px",
          border: "1px solid #C3C1C1",
        }}
      >
        <Box
          onClick={() => {
            setIsAdmin(true);
            setEmail("");
            setPassword("");
          }}
          sx={{
            width: "50%",
            bgcolor: isAdmin ? "rgb(42 142 57)" : "transparent",
            borderRadius: "5vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              color: isAdmin ? "#fff" : "#000",
              fontFamily: "Poppins",
              fontSize: { xs: "12px", md: "14px", xl: "18px" },
              fontWeight: 600,
            }}
          >
            Sign In as ADMIN
          </Typography>
        </Box>
        <Box
          onClick={() => {
            setIsAdmin(false);
            setEmail("");
            setPassword("");
          }}
          sx={{
            width: "50%",
            bgcolor: isAdmin ? "transparent" : "rgb(42 142 57)",
            borderRadius: "5vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              color: isAdmin ? "#000" : "#fff",
              fontFamily: "Poppins",
              fontSize: { xs: "12px", md: "14px", xl: "18px" },
              fontWeight: 600,
            }}
          >
            Sign In as USER
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginTabs;
