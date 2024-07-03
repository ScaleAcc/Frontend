import { Container } from "react-bootstrap";
// import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Container>
        <div>
            <Outlet />
        </div>
    </Container>
  )
}

export default MainLayout