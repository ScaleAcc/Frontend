import { z } from "zod";
const AddAdmin = z.object({
  fisrtName: z
    .string({ message: "من فضلك ادحل اسم " })
    .min(2, "من فضلك ادحل اسم "),
  lastName: z
    .string({ message: "من فضلك ادحل اسم " })
    .min(1, "من فضلك ادحل اسم "),
  email: z
    .string({ message: "من فضلك ادحل ايميل" })
    .min(1, "من فضلك ادحل ايميل"),
  number: z
    .string({ message: "من فضلك ادحل رقم تليفون" })
    .min(1, "من فضلك ادحل رقم تليفون"),
  whatsNumber: z
    .string({ message: "من فضلك ادحل رقم تليفون" })
    .min(1, "من فضلك ادحل رقم تليفون"),
  password: z
    .string({ message: "من فضلك ادخل كلمة مرور " })
    .min(2, "من فضلك ادحل كلمة مرور"),
});
export { AddAdmin };
