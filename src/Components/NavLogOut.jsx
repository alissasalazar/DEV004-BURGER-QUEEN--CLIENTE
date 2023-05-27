import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function ContainerInsideExample() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Burger Queen</Navbar.Brand>
        <Button variant="outline-success">Salir</Button>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;
