import { Container, Button } from "react-bootstrap";
import styles from '../../styles/Ahome.module.css'

export default function Ahome() {
  return (
    // <div>
      <Container className={styles.container}>
        <div className="d-grid gap-2">
          <Button variant="outline-dark" size="lg">
            User Operations
          </Button>
          <Button variant="outline-dark" size="lg">
            Staff Operations
          </Button>
          <Button variant="outline-dark" size="lg">
            Products Operations
          </Button>
          <Button variant="outline-dark" size="lg">
            Users Appointments
          </Button>
        </div>
      </Container>
    // </div>
  );
}
