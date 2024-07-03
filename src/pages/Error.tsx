import styles from "@styles/error.module.css";
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div className={styles.error__page}>
        <h1 className={styles.error__header}>40<span>4</span></h1>
        <p className={styles.error__desc}>Page Not Found! <Link to="/">Back To Home Page</Link></p>
    </div>
  )
}

export default Error