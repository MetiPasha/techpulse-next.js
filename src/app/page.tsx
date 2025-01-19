import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Container>
        <Nav />
        <hr />
        <Hero />
      </Container>
    </div>
  );
}
