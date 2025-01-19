import Nav from "@/components/Nav";
import Product from "@/components/Product";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Box>
      <Nav />
      <Product />
    </Box>
  );
};

export default ProductDetails;
