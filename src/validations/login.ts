import { z } from "zod";
const LoginSchema = z.object({
  email: z
    .string({ message: "من فضلك ادخل ايميل " })
    .min(2, "من فضلك ادحل ايميل"),
  password: z
    .string({ message: "من فضلك ادخل كلمة مرور " })
    .min(2, "من فضلك ادحل كلمة مرور"),
});
export { LoginSchema };
