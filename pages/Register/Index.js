import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Nav, Card } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/router';


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
          // navigate("/LogIn");
          router.push('/LogIn')
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
      <Container
        style={{
          borderStyle: "solid",
          borderRadius: "20px",
          borderColor: "#dee2e6",
          borderWidth: "1px",
          boxShadow: "5px 7px #adb5bd",
          height:"350px",
          width:"500px",
          marginTop:"3rem",
          marginBottom:"3rem"
        }}
      >
        <Form
          id="regForm"
          onSubmit={handleSubmit}
          // style={{
          //   margin: "20px 60px 70px 60px",
          // }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "red" }}>{errorMessage}</Form.Label>
            <br />
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              id="email"
              placeholder="Enter email"
              name=""
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
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
                marginBottom: "12px",
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
