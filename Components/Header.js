import styles from "../styles/Header.module.css";
import logo from "../public/Img/logo.jpg";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <h1>hi</h1>
      <img src={logo} alt="Logo" />;
    </div>
  );
}
