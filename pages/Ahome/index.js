import { Container, Button } from "react-bootstrap";
import styles from "../../styles/Ahome.module.css";
import { useRouter } from "next/router";

export default function Ahome() {
  const router = useRouter();

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
        <Button
          variant="outline-dark"
          size="lg"
          onClick={() => router.push("/productsAdmin")}
        >
          Products Operations
        </Button>
        <Button
          variant="outline-dark"
          size="lg"
          onClick={() => router.push("/Admin")}
        >
          Users Appointments
        </Button>
      </div>
    </Container>
    // </div>
  );
}
