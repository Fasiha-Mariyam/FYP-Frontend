/* eslint-disable react/prop-types */
import React from "react";

import { Box, Typography } from "@mui/material";

const LoginTabs = ({
  isAdmin,
  setIsAdmin,
  setEmail,
  setPassword,
  setIsDriver,
  isDriver,
  isUser,
  setIsUser,
}) => {
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
        {/* admin */}
        <Box
          onClick={() => {
            setIsAdmin(true);
            setIsDriver(false);
            setIsUser(false);
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
           ADMIN
          </Typography>
        </Box>
        {/* user */}
        <Box
          onClick={() => {
            setIsAdmin(false);
            setIsUser(true);
            setIsDriver(false);
            setEmail("");
            setPassword("");
          }}
          sx={{
            width: "50%",
            bgcolor: isUser ? "rgb(42 142 57)" : "transparent",
            borderRadius: "5vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              color: isUser ? "#fff" : "#000",
              fontFamily: "Poppins",
              fontSize: { xs: "12px", md: "14px", xl: "18px" },
              fontWeight: 600,
            }}
          >
            USER
          </Typography>
        </Box>
        {/* driver */}
        <Box
          onClick={() => {
            setIsAdmin(false);
            setIsUser(false);
            setIsDriver(true);
            setEmail("");
            setPassword("");
          }}
          sx={{
            width: "50%",
            bgcolor: isDriver ? "rgb(42 142 57)" : "transparent",
            borderRadius: "5vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              color: isDriver ? "#fff" : "#000",
              fontFamily: "Poppins",
              fontSize: { xs: "12px", md: "14px", xl: "18px" },
              fontWeight: 600,
            }}
          >
          DRIVER
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginTabs;
