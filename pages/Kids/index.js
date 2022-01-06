import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../../styles/service.module.css";
import Image from "next/image";
import kids from '../../public/Img/baby.png'
export default function ServiceKids() {
  return (
    <div>
      <Container fluid="md">
        <Row>
          <Image
            src={kids}
            alt="Vercel Logo"
            width={1920}
            height={819}
          />
        </Row>
        <Row className={styles.row}>
          <Col>
            <h1>SERVICES FOR KIDS</h1>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col sm={4}>
            <div>
              <ul>
                <li>Hair Spa.</li>
                <li>Scalp & Hair Treatments.</li>
                <li>Quick Hair.</li>
                <li>Cut Hair .</li>
              </ul>
            </div>
          </Col>
          <Col xs lg="2">
            <ul className={styles.ul}>
              <li>$507</li>
              <li>$600</li>
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
                <li>Soothing Treament. </li>

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
              </ul>
            </div>
          </Col>
          <Col xs lg="2">
            <ul className={styles.ul}>
              <li>$160</li>
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
