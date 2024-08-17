import { z } from "zod";

const addEmployeeSalary = z.object({
  receipt_value: z
    .number({ message: "من فضلك أدخل قيمة الإيصال" })
    .min(1, "قيمة الإيصال يجب أن تحتوي على حرفين على الأقل"),
  receipt_date: z
    .string({ message: "من فضلك أدخل تاريخ الإيصال" })
    .min(1, "تاريخ الإيصال لا يمكن أن يكون فارغًا"),
  notes: z
    .string({ message: "من فضلك أدخل ملاحظة" })
    .min(1, "الملاحظة لا يمكن أن تكون فارغة"),
  payment_receipt_image: z
    .string({ message: "من فضلك أدخل صورة الإيصال" })
    .min(1, "صورة الإيصال لا يمكن أن تكون فارغة"),
  safe_id: z
    .string({ message: "من فضلك أدخل معرف الخزنة" })
    .min(1, "معرف الخزنة لا يمكن أن يكون فارغًا"),
  employee_id: z
    .string({ message: "من فضلك أدخل معرف الموظف" })
    .min(1, "معرف الموظف لا يمكن أن يكون فارغًا"),
});

export { addEmployeeSalary };
