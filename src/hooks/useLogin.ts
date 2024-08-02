import { useQuery } from "react-query";
interface Iprops {
  email: string;
  password: string;
}
const useLogin = (data: Iprops) => {
  return useQuery({
    queryFn: () =>
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
    queryKey: ["login"],
  });
};

export default useLogin;
