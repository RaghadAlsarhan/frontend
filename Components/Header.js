// import styles from "../styles/Header.module.css";
// import logo from "../public/Img/logo.jpg";
// import Link from "next/link";

import { Nav, Container, Navbar } from "react-bootstrap";
import Image from 'next/image'

export default function Header() {
  return (
    <Nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Image src={'/Img/logo.jpg'} width={400} height={500}/>
    </Nav>
  );
}
