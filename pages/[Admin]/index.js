import { Container, Row, Col, Table } from "react-bootstrap";

export default function Admin({ data }) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name of Servies:</th>
                  <th>price of Servies :</th>
                  <th>Username</th>
                </tr>
              </thead>
              {data.map((element, i) => (
                <tbody key={i}>
                  <tr>
                    <td> {element.name} </td>
                    <td> ${element.price} </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3001/appointment/");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
