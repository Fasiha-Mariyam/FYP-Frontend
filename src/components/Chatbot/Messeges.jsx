import React, { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
import {
  Card,
  Avatar,
  CardHeader,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import { red } from "@mui/material/colors";
import SendIcon from "@mui/icons-material/Send";

const Messeges = () => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message.trim() !== "") {
      setConversation([...conversation, { type: "user", text: message }]);
      setMessage("");
    }
  };

  return (
    <>
      <div
        style={{
          marginBottom: 20,
          marginTop: 20,
          height: "70%", // Fixed height to create a scrollable area
          display: "flex",
          flexDirection: "column",
          gap: "10px", // Space between items
          overflowY: "auto", // Enables vertical scrolling
          scrollbarWidth: "thin", // Thin scrollbar for Firefox
          scrollbarColor: "#666 transparent",
        }}
      >
        {conversation.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: item.type === "user" ? "flex-end" : "flex-start", // Flexbox for alignment
            }}
          >
            <div
              style={{
                maxWidth: "80%", // Limits width of messages for better readability on larger screens
                padding: 10,
                backgroundColor: item.type === "user" ? "#e0e0e0" : "#d3f2a3",
                borderRadius: 10,
                marginBottom:
                  index === conversation.length - 1 ? "20%" : "10px",
                wordWrap: "break-word", // Allows long words to break into the next line
                overflowWrap: "break-word", // Helps with breaking long words or URLs
              }}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>

      <div>
        <Card
          sx={{
            maxWidth: { xs: 300, sm: 400, md: 500 },
            height: 80, // Adjust width based on screen size
            width: "100%", // Ensures the card does not exceed the width of its container
            position: "absolute",
            bottom:"5%",
            left: 0,
            right: 0,
            margin: "0 auto", // Center the card horizontally
          }}
        >
          <CardHeader
            action={
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ marginRight: 1, width: "100%" }}
              >
                <TextField
                  label="Message"
                  variant="outlined"
                  sx={{ width: { xs: 200, sm: 300, md: 350 } }}
                  value={message}
                  onChange={handleMessageChange}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit();
                    }
                  }}
                  style={{ marginRight: 10 }}
                />
                <IconButton
                  aria-label="send"
                  onClick={handleSubmit}
                  sx={{ color: red[500] }}
                >
                  <SendIcon />
                </IconButton>
              </Stack>
            }
          />
        </Card>
      </div>
    </>
  );
};

export default Messeges;
