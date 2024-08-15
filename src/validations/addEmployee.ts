import { z } from "zod";
const addEmployee = z.object({
  Fname: z.string({ message: "من فضلك ادحل اسم " }).min(2, "من فضلك ادحل اسم "),
  Lname: z.string({ message: "من فضلك ادحل اسم " }).min(1, "من فضلك ادحل اسم "),
  status: z
    .string({ message: "من فضلك ادحل حالة" })
    .min(1, "من فضلك ادحل حالة"),
  phone_number: z
    .string({ message: "من فضلك ادحل رقم تليفون" })
    .min(1, "من فضلك ادحل رقم تليفون"),
  whatsapp_number: z
    .string({ message: "من فضلك ادحل رقم تليفون" })
    .min(1, "من فضلك ادحل رقم تليفون"),
  current_salary: z
    .string({ message: "من فضلك ادحل المرتب" })
    .min(1, "من فضلك ادحل المرتب"),
  country_id: z
    .string({ message: "من فضلك كود المحافظة" })
    .min(1, "من فضلك كود المحافظة"),
});
export { addEmployee };
