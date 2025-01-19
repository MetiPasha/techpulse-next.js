import { Box, Button } from "@mui/material";
import { useState } from "react";

const ProductCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <Box
      sx={{ backgroundColor: "#f1f1f1", padding: "0.5rem", marginRight: "0.5" }}
    >
      <Button onClick={() => setCount(count - 1)}>-</Button>
      {count}
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </Box>
  );
};

export default ProductCounter;
