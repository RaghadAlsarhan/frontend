import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "../../styles/service.module.css";
import Image from "next/image";
export default function Service() {
  return (
    <div>
      <Container fluid="md">
          <Row>
          <Image src="https://i.pinimg.com/originals/e0/a9/d2/e0a9d27b2b18486d4295ae5157b0a752.jpg" alt="Vercel Logo" width={1920} height={819} />
          </Row>
        <Row className={styles.row}>
          <Col>
            <h1>SERVICES</h1>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col>
            <div>
              <ul>
                <li>Hair Straightening.</li>
                <li>Hair Color. </li>
                <li>Hair Extensions.</li>
                <li>Hair Spa.$50</li>
                <li>SCALP & Hair Treatments.</li>
                <li>Quick Hair.</li>
                <li>Cut Hair .</li>
              </ul>
            </div>
          </Col>
          <Col xs lg="2">
            <ul className={styles.ul}>
              <li>$140</li>
              <li>$100</li>
              <li>$74</li>
              <li>$507</li>
              <li>$600</li>
              <li>$124</li>
              <li>$400</li>
            </ul>
          </Col>
          <Col>
            {/* <Card  className={styles.card}>
              <Card.Body  className={styles.cardbody}>HAIR</Card.Body>
            </Card> */}
            <Card className={styles.card}>HAIR</Card>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col>
            <Card className={styles.card}>FACE</Card>
          </Col>
          <Col>
            <div>
              <ul>
                <li>Soothing Treament. </li>
                <li> Instat Express Factal. </li>
                <li> Acne Treatment.</li>
                <li> Detox / Hydration. </li>
                <li>BRIGHTENING / ANTI-AGEING.</li>
                <li>Signature Facial4. </li>
                <li> MakeUp. </li>
              </ul>
            </div>
          </Col>
          <Col xs lg="2">
            <ul className={styles.ul}>
              <li>$260</li>
              <li>$200</li>
              <li>$70</li>
              <li>$589</li>
              <li>$55</li>
              <li>$524</li>
              <li>$300</li>
            </ul>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col>
            <div>
              <ul>
                <li> Body Massage.</li>
                <li> Body Exfoliation. </li>
                <li>  Hammam. </li>
                <li> Toning. </li>
              </ul>
            </div>
          </Col>
          <Col xs lg="2">
            <ul className={styles.ul}>
              <li>$160</li>
              <li>$60</li>
              <li>$70</li>
              <li>$587</li>
            </ul>
          </Col>
          <Col>
            <Card className={styles.card}>BODY</Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
// justify-content
