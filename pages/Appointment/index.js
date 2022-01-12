import axios from "axios";
import React from "react";
import Image from "next/image";
import style from "../../styles/Appointment.module.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
export default function Appointment() {
  const [service, setService] = useState([]);
  const [onChaneService, setOnChaneService] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/services/")
      .then((res) => {
        console.log(res.data);
        setService(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //-------------------------------------------//
  //***save the Appointmint in admin page ***//
  //--------------------------------------//
  function saveAppointment(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/appointment/save", { name, price })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  /////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <Container className={style.container}>
        <Row>
          <Image src={"/Img/body.jpg"} width={1800} height={800} />
        </Row>
        <Row className={style.row}>
          <Col>
            <h1>Appointment</h1>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <div className={style.divAll}>
              <div>
                <h2>Choose an service:</h2>
                <div>
                  <Form className={style.form}>
                    <select
                      onChange={(e) => {
                        setOnChaneService(JSON.parse(e.target.value));
                        setName(JSON.parse(e.target.value).name);
                        setPrice(JSON.parse(e.target.value).price);
                      }}
                    >
                      {service.map((services, i) => (
                        <option key={i} value={JSON.stringify(services)}>
                          {services.name}
                        </option>
                      ))}
                    </select>
                    {onChaneService && (
                      <div className={style.div1}>
                        <ul>
                          <li> Name of Servies: {onChaneService.name}</li>
                          <li> price of Servies : ${onChaneService.price} </li>
                        </ul>
                      </div>
                    )}
                    <br />
                    <h4> Time of Servies :</h4>
                    <div>
                      {["radio"].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check
                            inline
                            label="9AM-12PM"
                            name="group1"
                            type={type}
                            id={`inline-${type}-morning`}
                          />
                          <Form.Check
                            inline
                            label="3PM-6PM"
                            name="group1"
                            type={type}
                            id={`inline-${type}-evening1`}
                          />
                          <Form.Check
                            inline
                            label="7PM-11PM"
                            name="group1"
                            type={type}
                            id={`inline-${type}-evening2`}
                          />
                        </div>
                      ))}
                    </div>
                    <Button
                      className={style.Button}
                      type="click"
                      onClick={(e) => {
                        saveAppointment(e);
                      }}
                    >
                      confirm appointment
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
