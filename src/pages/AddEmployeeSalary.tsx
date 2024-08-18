import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import Heading from "@components/common/Heading/Heading";
import SuccessToast from "@components/toasts/SuccessToast";
import ErrorToast from "@components/toasts/ErrorToast";
import useAddEmployeeSalary from "@hooks/useAddEmployeeSalary";

import { addEmployeeSalary } from "@validations/addEmployeeSalary";
import { Textarea } from "../components/ui/textarea";
import useGetAllVaults from "@hooks/useGetAllVaults";
import useGetAllEmployees from "@hooks/useGetAllEmployees";

const AddEmployeeSalary = () => {
  const { data: vaultsData } = useGetAllVaults();
  const { data: employeesData } = useGetAllEmployees();
  const navigate = useNavigate();
  console.log(vaultsData, employeesData);

  const form = useForm<z.infer<typeof addEmployeeSalary>>({
    mode: "onBlur",
    resolver: zodResolver(addEmployeeSalary),
  });

  const { mutate } = useAddEmployeeSalary();

  const submitForm: SubmitHandler<z.infer<typeof addEmployeeSalary>> = (
    data
  ) => {
    mutate(data, {
      onSuccess(data) {
        console.log(data);

        if (data.code) {
          SuccessToast(
            "تم اضافة راتب الموظف بنجاح",
            navigate,
            "/employees-salary"
          );
        } else {
          ErrorToast(data.error.message);
        }
      },
    });
  };

  return (
    <div className="page__container">
      <Heading title={`انشاء راتب موظف `} />

      <Form {...form}>
        <form className="pt-8 p-6" onSubmit={form.handleSubmit(submitForm)}>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mb-4">
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="receipt_value"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>قيمة سند الصرف</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=" (راتب الموظف) من فضلك ادخل قيمة سند الصرف"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="payment_receipt_image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>صورة بيان الصرف</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="من فضلك ادخل صورة بيان الصرف"
                        {...field}
                        type="file"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="receipt_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تاريخ الصرف</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="من فضلك ادخل تاريخ الصرف "
                        {...field}
                        type="date"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-1">
              <FormField
                control={form.control}
                name="employee_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>اسم الموظف </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="من فضلك اختر اسم الموظف  " />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {employeesData!.map((employee) => (
                          <SelectItem
                            key={employee.id}
                            value={String(employee.id)}
                          >
                            {employee.Fname}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="safe_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>اسم الخزنة </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="من فضلك اختر الخزنة " />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {vaultsData!.map((safe) => (
                          <SelectItem key={safe.id} value={String(safe.id)}>
                            {safe.safe_name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> ملاحظات</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="من فضلك ادخل ملاحظاتك"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button className="mr-2">الرجوع للرئيسية</Button>
            <Button variant="secondary" type="submit">
              اضافة
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddEmployeeSalary;
