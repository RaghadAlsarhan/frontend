import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { AiFillTwitterSquare } from "react-icons/ai";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
        {/* <ul> */}
          <TiSocialFacebook /> <AiFillTwitterSquare /> <TiSocialInstagram />
        {/* </ul> */}
        <p id={styles.p}>copyright © 2021</p>
    </div>
  );
}
