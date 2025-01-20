"use client";
import { Box, Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Link from "next/link";
import Cart from "./Cart";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <Box
      sx={{
        color: "white",
        backgroundColor: "black",
        padding: "2rem 0",
        direction: "rtl", // برای راست‌چین شدن کل محتوا
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "2xl" }}>NEXTSHOP</Typography>
        <ul
          style={{
            textTransform: "uppercase",
            textDecoration: "none",
            display: "flex",
            flexDirection: "row-reverse", // ترتیب لینک‌ها راست به چپ
            padding: 0,
            margin: 0,
            listStyle: "none",
          }}
        >
          <li style={{ marginLeft: "2rem", fontWeight: "700" }}>
            <Link href="/">Home</Link>
          </li>
          <li style={{ marginLeft: "2rem", fontWeight: "700" }}>
            <Link href="/">Headphone</Link>
          </li>
          <li style={{ marginLeft: "2rem", fontWeight: "700" }}>
            <Link href="/">Speaker</Link>
          </li>
          <li style={{ marginLeft: "2rem", fontWeight: "700" }}>
            <Link href="/">Airphone</Link>
          </li>
        </ul>
        <Button onClick={() => setShowCart(!showCart)}>
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt="logo"
            width={30}
            height={30}
          />
        </Button>
      </Container>
      {showCart && <Cart />}
    </Box>
  );
};

export default Nav;
