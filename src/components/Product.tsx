import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Button from "./Button";
import ProductCounter from "./ProductCounter";

const Product = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        direction: "rtl",
      }} // تنظیم جهت راست به چپ
    >
      <Image
        src="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
        width={500}
        height={500}
        alt="Headphones"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "70vh",
          width: "30vw",
          justifyContent: "center",
          marginRight: "8rem", // تغییر به marginRight برای راست‌چین شدن
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ProductCounter />
          <Button variant="contained" color="#d98d45">
            Add to cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Product;
