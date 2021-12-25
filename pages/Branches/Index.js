import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../../styles/branches.module.css";
import Image from 'next/image'
export default function Branches() {
  return (
    <div>
      <Container className={styles.container}>
        <Row>
        <Image
            src="/Img/branches.jpg"
            alt="Vercel Logo"
            width={1400}
            height={600}
          />
        </Row>
        <Row className={styles.container}>
          <h1>  OUR LOCATIONS</h1>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Card className={styles.card} style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Riyadh-Al-Sahafa </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  neighborhood
                </Card.Subtitle>
                <Card.Text>Tel:+96658745914587 Tel2:+9661236985744</Card.Text>
              </Card.Body>
            </Card>
          </Col>
      
          <Col>
            <Card className={styles.card} style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Najran-Prince Mishaal </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  neighborhood
                </Card.Subtitle>
                <Card.Text>Tel:+966059321478 Tel2:+966123654789</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>

        </Row>
      </Container>
    </div>
  );
}
