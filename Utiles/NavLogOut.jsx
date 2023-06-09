import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export default function NavLogOut() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="container-fluid">
      <Container>
        <Navbar.Brand>Burger Queen</Navbar.Brand>
        <Button href="/" variant="outline-success">Salir</Button>
      </Container>
    </Navbar>
  );
}


