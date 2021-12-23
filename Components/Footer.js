// import styles from "../styles/Footer.module.css";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { AiFillTwitterSquare } from "react-icons/ai";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <h1>Beauty Center</h1>
      </div>
      <div>
        <ul>
          
            {" "}
            <TiSocialFacebook />
         
         
            {" "}
            <AiFillTwitterSquare />
          
         
            {" "}
            <TiSocialInstagram />
       
        </ul>
      </div>
      <div>
        <p>copyright © 2021</p>
      </div>
    </div>
  );
}
