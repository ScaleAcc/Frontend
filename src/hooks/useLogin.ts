import { useMutation } from "react-query";
interface Iprops {
  email: string;
  password: string;
}
//use mutaion
const useLogin = () => {
  return useMutation({
    mutationFn: (data: Iprops) =>
      fetch("https://trombetta.mzservices.online/public/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailOrMobile: data.email,
          password: data.password,
        }),
      }).then((response) => response.json()),
  });
};

export default useLogin;
