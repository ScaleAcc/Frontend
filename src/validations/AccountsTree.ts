import { z } from "zod";
const AccountTree = z.object({
  nameAccount: z.string({
    required_error: "Please select an email to display.",
  }),
  code: z.string({ message: "من فضلك ادحل اسم للخزنة" }),
});
export { AccountTree };
