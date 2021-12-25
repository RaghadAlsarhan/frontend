import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import homePic from "../public/Img/homePic.png";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import womenService from "../public/Img/womenService.png";
import menService from "../public/Img/menService.png";
import kidsService from "../public/Img/kidsService.png";
import {useNavigate} from 'react-router-dom'
import { useRouter } from 'next/router';


export default function Home() {
  // const navigate = useNavigate()
  // function handleclick(){
    // navigate('/ServiceProvider')
    // router.push('/home')
// }
const router = useRouter();

  return (
    <div>
      <div className={styles.firstDiv}>
        <Card className="bg-dark text-black" className={styles.firstDiv}>
          <Image src={homePic} alt="Card image" className={styles.img}/>
          <Card.ImgOverlay>
            <Card.Title className={styles.cardTitle}>BEAUTY CENTER</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
      <div className={styles.secDiv}>
        <h2 className={styles.h2}>About us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className={styles.thirdDiv}> 
        <CardGroup>
          <Card className={styles.card}>
            <Image
              variant="top"
              src={womenService}
              onClick={() => router.push('/Women')}  />
            <Card.ImgOverlay>
            <Card.Title className={styles.title} onClick={() => router.push('/Women')} > FOR HER</Card.Title>
          </Card.ImgOverlay>
          </Card>
          <Card className={styles.card}>
            <Image variant="top" src={menService} />
            <Card.ImgOverlay>
            <Card.Title className={styles.title} onClick={() => router.push('/Men')}>FOR HIM</Card.Title>
          </Card.ImgOverlay>
          </Card>
          <Card className={styles.card}>
            <Image variant="top" src={kidsService}/>
            <Card.ImgOverlay>
            <Card.Title className={styles.title} onClick={() => router.push('/Kids')} >FOR BABIES</Card.Title>
          </Card.ImgOverlay>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}
