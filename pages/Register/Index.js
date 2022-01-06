import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Nav, Card } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../../styles/Signup.module.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  //const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3001/user/register", { email, password })
      .then((res) => {
        console.log(res.data);
        if (!(email == "" && password == "")) {
          router.push("/LogIn");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function validate(e) {
    if (email == "" && password == "") {
      setErrorMessage("Please enter your information");
    } else {
      handleSubmit(e);
    }
  }

  return (
    <div>
      <h2 className={styles.h2}>Sign up</h2>
      <Container
        style={{
          borderStyle: "solid",
          borderRadius: "20px",
          borderColor: "#dee2e6",
          borderWidth: "1px",
          boxShadow: "5px 7px #adb5bd",
          height: "280px",
          width: "400px",
          marginTop: "1rem",
          marginBottom: "3rem",
        }}
      >
        <Form
          id="regForm"
          onSubmit={handleSubmit}
          // style={{
          //   margin: "20px 60px 70px 60px",
          // }}
        >
          {/* <Form.Group className="mb-3" controlId="formBasicEmail"> */}
            <Form.Label style={{ color: "red" }}>{errorMessage}</Form.Label>
            <br />
            <Form.Label className={styles.label}>Email address</Form.Label>
            <Form.Control
              className={styles.control}
              type="email"
              id="email"
              placeholder="Enter email"
              name=""
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          {/* </Form.Group> */}

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className={styles.label}>Password</Form.Label>
            <Form.Control
              className={styles.control}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group>
            <Button
              variant="primary"
              onClick={validate}
              type="submit"
              style={{
                backgroundColor: "black",
                border: "none",
                borderRadius: "10px",
                marginBottom: "10px",
                height:"35px" 
              }}
            >
              Submit
            </Button>
          </Form.Group>
          <Card.Link href="/LogIn" style={{ color: "grey" }}>
            Login
          </Card.Link>
        </Form>
      </Container>
    </div>
  );
}
