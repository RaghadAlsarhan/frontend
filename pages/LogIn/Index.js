import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Link from "next/link";
import Styles from "../../styles/Login.module.css";


export default function Login() {
    return (
        <div className="Login">
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Form>
                  <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
                    Sign In
                  </div>
                  <hr />
                  <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" />
                  </Form.Group>
                  <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                  <div>
                    <Button id={Styles.Buttonn} type="submit">
                      Login
                    </Button>
                  </div>
                  <Nav.Link
                    href="/Register"
                    style={{ textDecoration: "none", color: "blue" }}
                  >
                    New Here? Create Account
                  </Nav.Link>
                </Form>
              </Col>
              <Col></Col>
    
            </Row>
          </Container>
        </div>
      );
}
