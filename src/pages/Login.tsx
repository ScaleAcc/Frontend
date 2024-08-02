import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/src/validations/login";

import { FloatingLabel, PrimaryButton } from "@components/forms";
import styles from "@styles/login.module.css";
import Wave from "@assets/svg/wave.svg?react";
import useLogin from "../hooks/useLogin";
import { useState } from "react";

interface Iprops {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iprops>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
  });
  const [loginData, setLoginData] = useState<Iprops>({
    email: "",
    password: "",
  });
  const { data: queryData } = useLogin(loginData);
  const submitForm: SubmitHandler<Iprops> = (data) => {
    console.log(data);
    setLoginData(data);
    if (queryData) {
      console.log("Query Data:", queryData);
    }
  };
  return (
    <div className={styles.login__form}>
      <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
        <h2 className={styles.login__header}>Scale</h2>
        <FloatingLabel
          type="email"
          label="البريد الاكترونى"
          name="email"
          register={register}
          error={errors.email?.message}
        />

        <FloatingLabel
          type="password"
          label="كلمة المرور"
          name="password"
          register={register}
          error={errors.password?.message}
        />
        <PrimaryButton title="تسجيل الدخول" />
      </form>
      <div className={styles.wave__icon}>
        <Wave />
      </div>
    </div>
  );
};

export default Login;
