import { z } from "zod";
const AddVaultSchema = z.object({
  vaultName: z
    .string({ message: "من فضلك ادحل اسم للخزنة" })
    .min(2, "من فضلك ادحل اسم للخزنة"),
  currentBalance: z
    .string({ message: "من فضلك ادحل رصيد الخزنة" })
    .min(1, "من فضلك ادحل رصيد الخزنة"),
});
export { AddVaultSchema };
