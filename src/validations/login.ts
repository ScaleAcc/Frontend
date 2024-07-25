import { z } from "zod";
const LoginSchema = z.object({
  email: z.string().min(2, "من فضلك ادحل ايميل"),
  password: z.string().min(2, "من فضلك ادحل ايميل").email(),
});
export { LoginSchema };
