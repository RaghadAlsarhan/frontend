import React from "react";
import { Card ,Container, Row, Col} from "react-bootstrap";
import styles from "../../styles/ServiceProvider.module.css"
import Image from "next/image";
export default function ServiceProvider({data}) {
  return (
    <div>
        <Container>
        <Row>
          <Image
            src="/Img/servicespage.jpg"
            alt="Vercel Logo"
            width={1900}
            height={700}
          />
        </Row>
        <Row>
          <h1 className={styles.h1}>
            SERVICE PROVIDER
          </h1>
        </Row>
        <Row>
          <Col className={styles.col}>
         
         
              <Card className={styles.card}  style={{ width: "18rem" }}>
                  <Image
                    src={'https://images.squarespace-cdn.com/content/v1/59b2d178f5e2314756717501/1527715358926-3C03C33B2W307B446Y5M/Natural+light+Headshots'}
                    alt="SeviceProvider images"
                    width={400}
                    height={400}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h1> Farah Nadim</h1>
                    </Card.Title>
                    <Card.Text>makeup artist</Card.Text>
                  </Card.Body>
                </Card> <Card className={styles.card}  style={{ width: "18rem" }}>
                  <Image
                    src={'https://images.squarespace-cdn.com/content/v1/53dac69ae4b0ea7cdef448c2/1518217892623-RR2UFJ96FVO2S0S3OJFM/1210_Amelia-36-Edit.jpg'}
                    alt="SeviceProvider images"
                    width={400}
                    height={400}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h1> Naia Salim</h1>
                    </Card.Title>
                    <Card.Text>makeup artist</Card.Text>
                  </Card.Body>
                </Card> <Card className={styles.card}  style={{ width: "18rem" }}>
                  <Image
                    src={'http://static1.squarespace.com/static/51171438e4b0c59967aa52ab/t/5a1c8e9a0d92971bbc32d01c/1511820963178/20170605-elizabethjames0101+copy.jpg'}
                    alt="SeviceProvider images"
                    width={400}
                    height={400}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h1> Huda Kattan</h1>
                    </Card.Title>
                    <Card.Text>Skin cleaning expert</Card.Text>
                  </Card.Body>
                </Card> <Card className={styles.card}  style={{ width: "18rem" }}>
                  <Image
                    src={'https://www.dayofdubai.com/sites/default/files/2020-06/woman-wearing-orange-blazer-showing-thumbs-up-3201694.jpg'}
                    alt="SeviceProvider images"
                    width={400}
                    height={400}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h1> Nadine</h1>
                    </Card.Title>
                    <Card.Text>hairstylist expert</Card.Text>
                  </Card.Body>
                </Card> <Card className={styles.card}  style={{ width: "18rem" }}>
                  <Image
                    src={'https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-755-1-1024x683.jpg'}
                    alt="SeviceProvider images"
                    width={400}
                    height={400}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h1> Emad Ahmed</h1>
                    </Card.Title>
                    <Card.Text>barber expert</Card.Text>
                  </Card.Body>
                </Card> <Card className={styles.card}  style={{ width: "18rem" }}>
                  <Image
                    src={'https://davd.photo/wp-content/uploads/2019/03/rocco-roxie-employee-headshots-4.jpg'}
                    alt="SeviceProvider images"
                    width={400}
                    height={400}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h1> Sami</h1>
                    </Card.Title>
                    <Card.Text>massage expert</Card.Text>
                  </Card.Body>
                </Card>
           
         
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3001/provider");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
