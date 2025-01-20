import { Box, Typography, Button as MUIButton } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Cart = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        height: "100vh",
        width: "99.2vw",
        backgroundColor: "rgba(0,0,0,0.5)",
        top: 120,
        direction: "rtl", // برای راست‌چین شدن کل محتوا
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 400, // تغییر جهت برای راست‌چین
          top: 20,
          minHeight: "20vh",
          width: "20vw",
          backgroundColor: "white",
          color: "black",
          padding: "1.5rem",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Cart</Typography>
          <MUIButton>Remove All</MUIButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            margin: "1rem 0",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Image
              src="/assets/cart/image-xx59-headphones.jpg"
              width={50}
              height={50}
              alt="headphones"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginRight: "1rem", // تغییر به marginRight برای راست‌چین
              }}
            >
              <Typography variant="body1">Headphone z</Typography>
              <Typography variant="body2" sx={{ color: " #6f7275" }}>
                $30000
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // تغییر جهت متن برای راست‌چین
            }}
          >
            <Typography sx={{ fontSize: "0.75rem" }}>Count</Typography>
            <Typography variant="body1" sx={{ fontWeight: 800 }}>
              2
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Total</Typography>
          <Typography>$$$</Typography>
        </Box>
        <Button
          color="#d97d45"
          variant="contained"
          sx={{ width: "100%", marginTop: "1rem" }}
        >
          <Link href="/checkout">Checkout</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
