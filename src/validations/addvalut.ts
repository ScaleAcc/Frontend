import { z } from "zod";
const AddVaultSchema = z.object({
  vaultCode: z.string().min(2, "من فضلك ادحل كود للخزنة"),
  vaultName: z.string().min(2, "من فضلك ادحل اسم للخزنة"),
  currentBalance: z.string().min(1, "من فضلك ادحل رصيد الخزنة"),
  description: z.string().min(2, "من فضلك ادحل بيان للخزنة"),
});
export { AddVaultSchema };
