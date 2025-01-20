import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "70vh",
        width: "30vw",
        justifyContent: "center",
        direction: "rtl", // تنظیم جهت راست به چپ
      }}
    >
      <Typography
        sx={{
          transform: "uppercase",
          fontSize: "1.5rem",
          letterSpacing: "0.5rem",
          color: "#4f4f4f",
          marginBottom: "1rem",
          textAlign: "right", // متن راست‌چین
        }}
        variant="h3"
      >
        New Product
      </Typography>
      <Typography
        sx={{
          fontWeight: "700",
          margin: "1rem",
          marginBottom: "1rem",
          fontSize: "3.5rem",
          textAlign: "right", // متن راست‌چین
        }}
        variant="h1"
      >
        xx99 Mark Id Headphone
      </Typography>
      <Typography
        sx={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "right" }} // متن راست‌چین
        variant="body1"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quam
        quibusdam dolores iste ullam sequi?
      </Typography>
      <Button variant="contained" color="#d97d45">
        See Product
      </Button>
    </Box>
  );
};

export default Hero;
