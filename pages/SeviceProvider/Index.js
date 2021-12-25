import React from "react";
import { Card ,Container, Row, Col} from "react-bootstrap";
import styles from "../../styles/ServiceProvider.module.css"
import Image from "next/image";
export default function ServiceProvider({data}) {
  return (
    <div>
        <Container>
        <Row>
          <Image
            src="/Img/servicespage.jpg"
            alt="Vercel Logo"
            width={1900}
            height={700}
          />
        </Row>
        <Row>
          <h1 className={styles.h1}>
            SERVICE PROVIDER
          </h1>
        </Row>
        <Row>
          {/* <Col className={styles.col}>
            {data.map((elemm, i) => (
              <div key={i}>
                <Card className={styles.card}  style={{ width: "18rem" }}>
                  <Image
                    src={`${elemm.imge}`}
                    alt="SeviceProvider images"
                    width={400}
                    height={300}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h1> {elemm.name} </h1>
                    </Card.Title>
                    <Card.Text>{elemm.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3001/provider");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
