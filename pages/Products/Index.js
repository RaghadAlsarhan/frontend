
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Products.module.css"
export default function Products({ data }) {
  return (
    <div>
      <Container className={styles.container} >
        <Row>
        <Image src={"/Img/service.png"} width={1800} height={800} />
        </Row>
        <Row>
          <h1>  OUR PRODUCTS</h1>
        </Row>
        <Row>
          <Col className={styles.col} >
            {data.map((elem, i) => (
              <div key={i}>
                <Card className={styles.card} style={{ width: "18rem" }}>
                  <Image
                    src={`${elem.img}`}
                    alt="Products images"
                    width={600}
                    height={500}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h1> {elem.name} </h1>
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

