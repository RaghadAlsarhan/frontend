import styles from "../styles/Header.module.css";
// import Link from "next/link";

import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import Image from "next/image";

export default function Header() {
  return (
    <Nav defaultActiveKey="/" as="ul" className="nav">
    <Nav.Item as="li">
      {/* <Image src={Devjob} alt="logo"></Image> */}
    </Nav.Item>
    <Nav.Item as="li" style={{ marginTop: "60px", marginLeft: "10px" }}>
      <Nav.Link href="/" style={{ color: "#EBE5C1", fontSize: "16px" }}>
        <b>Home</b>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item as="li" style={{ marginTop: "60px" }}>
      <Nav.Link href="/Products" style={{ color: "#EBE5C1", fontSize: "16px" }}>
        <b>Products</b>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item as="li" style={{ marginTop: "60px" }}>
      <Nav.Link href="/SeviceProvider" style={{ color: "#EBE5C1", fontSize: "16px" }}>
        <b>Providers</b>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item as="li" style={{ marginTop: "60px" }}>
      <Nav.Link
        href="/user/signin"
        style={{ color: "#EBE5C1", fontSize: "16px" }}
      >
        <b>Signin</b>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item as="li" style={{ marginTop: "60px" }}>
      <Nav.Link
        href="/user/register"
        style={{ color: "#EBE5C1", fontSize: "16px" }}
      >
        <b>Signup</b>
      </Nav.Link>
    </Nav.Item>
  </Nav>
  );
}
