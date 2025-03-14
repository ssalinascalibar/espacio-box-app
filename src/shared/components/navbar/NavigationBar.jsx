import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Header from "../header/Header";
import Image from "react-bootstrap/Image";
import "./navigationBar.css";

export default function NavigationBar() {
  return (
    <>
      <Header />
      <Navbar expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/assets/img/logo-transparente.png"
              alt="EspacioBox Logo"
              width="200"
              height="200"
              className="d-inline-block align-top"
              fluid
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/nosotros">Nosotros</Nav.Link>
              <Nav.Link href="#link">Agendar</Nav.Link>
              <Nav.Link href="/boxes">Box</Nav.Link>
              <Nav.Link href="#link">Profesionales</Nav.Link>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="/login">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
