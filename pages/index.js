import Head from "next/head";
// import Image from 'next/image'
import styles from "../styles/Home.module.css";
 import Link from "next/link"
import {Container,Row,Col,Card,Button} from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Beauty Center</title>
        <meta name="description" content="beauty center " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.img}>
        {/* <Image src="https://www.al3nan.com/wp-content/uploads/2017/08/102727.jpg" alt="Home Page img " width={700} height={1500} /> */}
      </div>
      <Row>
      <div>
        <h1>About Us</h1>
        <p>
          Magna veniam cillum esse enim aute reprehenderit sit. Adipisicing
          labore est proident culpa est velit excepteur reprehenderit excepteur.
          Laborum cupidatat dolor exercitation duis eu id. Officia fugiat
          consectetur consectetur magna culpa dolore cupidatat tempor ipsum
          incididunt Lorem laboris adipisicing. Proident exercitation ullamco
          nulla id aute. Lorem aute adipisicing velit occaecat deserunt
          reprehenderit voluptate cillum eiusmod.
        </p>
      </div>
      </Row>
      <Row>
      <div>
      <Container>

<Row >
  <Col><Card body>MEN</Card></Col>
  <Col><Card body>WOMEN</Card></Col>
  <Col><Card body>KIDS</Card></Col>
</Row>
</Container>
      </div>
      </Row>
    </div>
  );
}
