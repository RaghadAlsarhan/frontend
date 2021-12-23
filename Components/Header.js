import styles from "../styles/Header.module.css";
// import Link from "next/link";

import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <Image src={"/Img/logo.jpg"} width={110} height={100} />
          </Navbar.Brand>{" "}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
            <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link eventKey={2} href="/Products">
                Products
              </Nav.Link>
              <Nav.Link eventKey={2} href="/Register">
                Register
              </Nav.Link>
              <Nav.Link eventKey={2} href="/Appointment">
                Appointment
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Image src={"/Img/logo.jpg"} width={400} height={500} />
    </div>
  );
}
