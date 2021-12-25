import React from "react";
import { useState, useEffect } from "react";
import style from "../../styles/Appointment.module.css";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
export default function productsAdmin() {
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    GetAllProdect();
  }, []);
//-------------------------------------------//
//*************Get all Prouducts************//
//-------------------------------------------//

  function GetAllProdect() {
    axios
      .get(`http://localhost:3001/products/`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
//-------------------------------------------//
  /************ delete Product *************/
//-----------------------------------------//
  function Delete(_id) {
    axios
      .delete(`http://localhost:3001/products/delete/${_id}`)
      .then((res) => {
        console.log(res.data);
        GetAllProdect();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  

//-------------------------------------------//
  /************ Save Product *************/
//-------------------------------------------//


  function Save(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/products/save`, { name, desc })
      .then((res) => {
        console.log(res.data);
        GetAllProdect();
      })
      .catch((err) => {
        console.log(err);
      });
  }
//-------------------------------------------//
//-------------------------------------------//
//-------------------------------------------//

  return (
    <div>
      <Container>
        <Row>
          <h1>PRODUCTS</h1>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name of Product:</th>
                  <th>Description of Product:</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {data.map((ele, i) => (
                <tbody key={i}>
                  <tr>
                    <td> {ele.name} </td>
                    <td>{ele.desc} </td>
                    <td>
                      <Button className={style.button}
                        onClick={() => {
                          Delete(ele._id);
                        }}
                      >
                        {" "}
                        Delete Product
                      </Button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>

            <Col>
              <h1>add New prodect</h1>
            </Col>
            <InputGroup className="mb-3">
              <FormControl
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Product Name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <FormControl
                onChange={(event) => {
                  setDesc(event.target.value);
                }}
                placeholder="Product Description"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />

              <Button 
                onClick={(e) => {
                  Save(e);
                }}
                variant="outline-secondary"
                id="button-addon2"
              >
                Add
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
