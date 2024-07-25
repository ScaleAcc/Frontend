import { z } from "zod";
const AddVaultSchema = z.object({
  vaultCode: z
    .string({ message: "من فضلك ادحل كود للخزنة" })
    .min(2, "من فضلك ادحل كود للخزنة"),
  vaultName: z
    .string({ message: "من فضلك ادحل اسم للخزنة" })
    .min(2, "من فضلك ادحل اسم للخزنة"),
  currentBalance: z
    .string({ message: "من فضلك ادحل رصيد الخزنة" })
    .min(1, "من فضلك ادحل رصيد الخزنة"),
  description: z
    .string({ message: "من فضلك ادحل بيان للخزنة" })
    .min(2, "من فضلك ادحل بيان للخزنة"),
});
export { AddVaultSchema };
