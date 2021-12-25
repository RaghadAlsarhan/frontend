import styles from "../styles/Header.module.css";
import Logo from '../public/Img/beautyLogo.png'
import Link from "next/link";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import Image from "next/image";

export default function Header() {
  return (
    <Nav defaultActiveKey="/" as="ul" className={styles.nav}>
      <Nav.Item as="li" className={styles.logo}>
        <Image  src={Logo} alt="logo" ></Image>
      </Nav.Item>
      <Nav.Item as="li" style={{ marginLeft: "10px" }}>
        <Nav.Link href="/" className={styles.navLink} style={{color:"white"}}>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/Products" className={styles.navLink} style={{color:"white"}}>
          Products
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/SeviceProvider" className={styles.navLink} style={{color:"white"}}>
          Providers
        </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
        <Nav.Link href="/Appointment" className={styles.navLink} style={{color:"white"}}>
          Make appointment 
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/LogIn" className={styles.navLink} style={{color:"white"}}>
          Signin
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/Register" className={styles.navLink} style={{color:"white"}}>
          Signup
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
