import { Container, Form, Button, Card } from "react-bootstrap";
import Link from "next/link";
import Styles from "../../styles/Login.module.css";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import styles from "../../styles/Login.module.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3001/user/login", { email, password })
      .then((res) => {
        //console.log(res.data);
        if (!(email === "" && password === "")) {
          router.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function validate(e) {
    if (email === "" && password === "") {
      setErrorMessage("Please enter your information");
    } else {
      handleSubmit(e);
    }
  }

  return (
    // <Container>
    <div>
      <h3 className={styles.h2}>Login</h3>
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
          id="formName"
          onSubmit={handleSubmit}
          // style={{ margin: "60px 60px 60px 60px" }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "red" }}>{errorMessage}</Form.Label>
            <br />
            <Form.Label className={styles.label}>Enter your email</Form.Label>
            <Form.Control
              className={styles.control}
              type="email"
              placeholder="Enter email"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <Form.Label className={styles.label}>
              Enter your Password
            </Form.Label>
            <Form.Control
              className={styles.control}
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Button
            onClick={validate}
            variant="primary"
            type="submit"
            style={{
              backgroundColor: "black",
              border: "none",
              borderRadius: "10px",
              marginBottom: "-10px",
              height:"35px"
            }}
          >
            Submit
          </Button>
          <br />
          <br />
          <Card.Link href="/Register" style={{ color: "grey" }}>
            If you did not register, click here
          </Card.Link>
        </Form>
      </Container>
    </div>
  );
}
