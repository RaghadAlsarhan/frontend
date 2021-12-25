import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../../styles/service.module.css";
import Image from "next/image";
export default function ServiceMen() {
  return (
    <div>
      <Container fluid="md">
        <Row>
          <Image
            src="/Img/menbeard.jpg"
            alt="Vercel Logo"
            width={1400}
            height={500}
          />
        </Row>
        <Row className={styles.row}>
          <Col>
            <h1>SERVICES FOR HIM </h1>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col sm={4}>
            <div>
              <ul>
                <li>Hair Straightening.</li>
                <li>Hair Color. </li>

                <li>Hair Spa.</li>
                <li> Scalp & Hair Treatments.</li>
                <li>Quick Hair.</li>
                <li>Cut Hair .</li>
                <li> Hair Dye .</li>
              </ul>
            </div>
          </Col>
          <Col xs lg="2">
            <ul className={styles.ul}>
              <li>$140</li>
              <li>$100</li>
              <li>$507</li>
              <li>$57</li>
              <li>$650</li>
              <li>$124</li>
              <li>$400</li>
            </ul>
          </Col>
          <Col>
            <Card className={styles.card}>HAIR</Card>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col>
            <Card className={styles.card}>FACE</Card>
          </Col>
          <Col sm={4}>
            <div>
              <ul>
                <li>Trim & Shave (Beard) </li>
                <li> Shave & Color </li>
                <li>Threading </li>
                <li> Instat Express Factal. </li>
                <li> Acne Treatment.</li>
                <li> Detox / Hydration. </li>
                <li>Brightening / anti-aging.</li>
                <li>Signature Facial4. </li>
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
              <li>$30</li>
            </ul>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col sm={4}>
            <div>
              <ul>
                <li> Body Massage.</li>
                <li> Body Exfoliation. </li>
                <li> Hammam. </li>
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
