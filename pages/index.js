import Head from "next/head";
import Image from 'next/image'
import styles from "../styles/Home.module.css";
import homePic from '../public/Img/homePic.png'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import womenService from '../public/Img/womenService.png'
import menService from '../public/Img/menService.png'
import kidsService from '../public/Img/kidsService.png'




export default function Home() {
  return (
  <div>
    <div className={styles.firstDiv}>
      <Image src={homePic} alt="homePictur" className={styles.img}/>
    </div>
    <div className={styles.secDiv}>
      <h2 className={styles.h2}>About us</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div>
    <CardGroup>
  <Card>
    <Image variant="top" src={womenService} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
  </Card>
  <Card>
    <Image variant="top" src={menService} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
  </Card>
  <Card>
    <Image variant="top" src={kidsService} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
  </Card>
</CardGroup>
    </div>
  </div>
  )
}

{/* <div>
<Head>
  <title>Beauty Center</title>
  <meta name="description" content="beauty center " />
  <link rel="icon" href="/favicon.ico" />
</Head>
<div className={styles.img}>
  {/* <Image src="https://www.al3nan.com/wp-content/uploads/2017/08/102727.jpg" alt="Home Page img " width={700} height={1500} /> */}
// </div>
// <Row>
// <div>
//   <h1>About Us</h1>
//   <p>
//     Magna veniam cillum esse enim aute reprehenderit sit. Adipisicing
//     labore est proident culpa est velit excepteur reprehenderit excepteur.
//     Laborum cupidatat dolor exercitation duis eu id. Officia fugiat
//     consectetur consectetur magna culpa dolore cupidatat tempor ipsum
//     incididunt Lorem laboris adipisicing. Proident exercitation ullamco
//     nulla id aute. Lorem aute adipisicing velit occaecat deserunt
//     reprehenderit voluptate cillum eiusmod.
//   </p>
// </div>
// </Row>
// <Row>
// <div>
// <Container>

// <Row >
// <Col><Card body>MEN</Card></Col>
// <Col><Card body>WOMEN</Card></Col>
// <Col><Card body>KIDS</Card></Col>
// </Row>
// </Container>
// </div>
// </Row>
// </div> */}