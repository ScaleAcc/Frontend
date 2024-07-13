import { FloatingLabel, PrimaryButton } from "@components/forms";
import styles from "@styles/login.module.css";
import Wave from "@assets/svg/wave.svg?react";
import { FormEvent, useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e:FormEvent)=>{
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <div className={styles.login__form}>
      <form>
        <h2 className={styles.login__header}>Scale</h2>
        <FloatingLabel type="email" label="البريد الاكترونى" value={email} onChange={handleEmailChange}/>
        <FloatingLabel type="password" label="كلمة المرور" value={password} onChange={handlePasswordChange}/>

        <PrimaryButton title="تسجيل الدخول" onClick={handleLogin}/>
      </form>
      <div className={styles.wave__icon}>
        <Wave />
      </div>
    </div>
  );
};

export default Login;
