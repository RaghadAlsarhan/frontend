import React from "react";
import { useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Image from "next/image";
export default function productsAdmin({ data }) {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  function Update() {
    axios
      .put(`http://localhost:3001/services/update/${id}`)
      .than((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function Delete() {
    axios
      .put(`http://localhost:3001/services/delete/${id}`)
      .than((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function Save() {
    axios
      .put(`http://localhost:3001/services/save`)
      .than((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
                  <th>Image:</th>

                  <th>Name of Product:</th>
                  <th>Description of Product:</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              {data.map((ele, i) => (
                <tbody key={i}>
                  <tr>
                    <td>
                      <Image
                        src={ele.img}
                        alt="Prodect imge"
                        width={150}
                        height={100}
                      />{" "}
                    </td>
                    <td> {ele.name} </td>
                    <td>{ele.desc} </td>
                    <td>
                      <Button> Delete Product</Button>
                    </td>
                    <td>
                      <Button> update Product</Button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
            <Table>
              <tbody>
                <tr>
                  <td>add New prodect</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3001/products/");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
