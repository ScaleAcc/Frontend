import { FloatingLabel } from '@components/forms'
import styles from "@styles/login.module.css"
import Wave from "@assets/svg/wave.svg?react";
const Login = () => {
  return (
    <div className={styles.login__form}>
        <form>
          <h2 className={styles.login__header}>Scale</h2>
          <FloatingLabel type="email" label="Email"/>
          <FloatingLabel type="password" label="Password"/>

          <input type="submit" name="submit" id="submit" />
        </form>
        <div className={styles.wave__icon}>
          <Wave />
        </div>
    </div>
  )
}

export default Login