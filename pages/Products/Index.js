// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import Image from "next/image";
// import styles from "../../styles/Products.module.css"
// export default function Products({ data }) {
//   return (
//     <div>
//       <Container>
//         <Row>
//           <Col className={styles.card.prod}>
//             {data.map((elem, i) => (
//               <div key={i}>
//                 <Card style={{ width: "18rem" }}>
//                   <Image
//                     src={`${elem.imge}`}
//                     alt="Products images"
//                     width={400}
//                     height={300}
//                   />
//                   <Card.Body>
//                     <Card.Title>
//                       <h1> {elem.name} </h1>
//                     </Card.Title>
//                     <Card.Text>{elem.desc}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </div>
//             ))}
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }
// export async function getServerSideProps(context) {
//   const res = await fetch("http://localhost:3000/product/");
//   const data = await res.json();


//   return {
//     props: {
//       data,
//     },
//   };
// }
