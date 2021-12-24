import React from "react";
import { Card } from "react-bootstrap";
import Image from "next/image";
export default function SeviceProvider() {
  return (
    <div>
        <Container>
        <Row>
          <Col className={styles.card.prod}>
            {data.map((elemm, i) => (
              <div key={i}>
                <Card style={{ width: "18rem" }}>
                  <Image
                    src={`${elemm.imge}`}
                    alt="Products images"
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/provider");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
