import React from "react";

import ChatContainer from "../../../components/Chatbot/ChatContainer";
import { Box } from "@mui/material";
function Chat() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ChatContainer />
    </Box>
  );
}

export default Chat;
