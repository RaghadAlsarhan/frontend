
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Products.module.css"
import productss from '../../public/Img/productss.png'
export default function Products({ data }) {
  return (
    <div>
      <Container className={styles.container} >
        <Row>
        <Image src={productss} width={1500} height={700} />
        </Row>
        <Row>
          <h1>OUR PRODUCTS</h1>
        </Row>
        <Row>
          <Col className={styles.col} >
            {data.map((elem, i) => (
              <div key={i}>
                <Card className={styles.card}>
                  <Image className={styles.imge}
                    src={`${elem.img}`}
                    alt="Products images"
                    width={'250px'}
                    height={'170rem'}
                  />
                  <Card.Body>
                    <Card.Title>
                      {elem.name}
                    </Card.Title>
                    <Card.Text>{elem.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3001/products/");
  const data = await res.json();
 
  return {
    props: {
      data,
    },
  };
}

