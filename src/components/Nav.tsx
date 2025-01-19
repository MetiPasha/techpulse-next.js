"use client";
import { Box, Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Link from "next/link";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
        <ul style={{ textTransform: "uppercase", textDecoration: "none" }}>
          <Link style={{ marginRight: "2rem", fontWeight: "700" }} href="/">
            Home
          </Link>
          <Link style={{ marginRight: "2rem", fontWeight: "700" }} href="/">
            Headphone
          </Link>
          <Link style={{ marginRight: "2rem", fontWeight: "700" }} href="/">
            Speaker
          </Link>
          <Link style={{ marginRight: "2rem", fontWeight: "700" }} href="/">
            Airphone
          </Link>
        </ul>
        <Button onClick={() => setShowCart(!showCart)}>
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt="logo"
            width={30}
            height={30}
          />
        </Button>
        {/* <ShoppingCartIcon style={{ width: "30px", height: "30px" }} />  اون یکی سبد خرید */}
      </Container>
      {showCart && <Cart />}
    </Box>
  );
};

export default Nav;
