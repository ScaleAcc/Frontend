import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddVaultSchema } from "@/src/validations/addvalut";
import { Button } from "../components/ui/button";
import { Textarea } from "@components/ui/textarea";
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

const AddVault = () => {
  const form = useForm<z.infer<typeof AddVaultSchema>>({
    mode: "onBlur",
    resolver: zodResolver(AddVaultSchema),
  });
  const submitForm: SubmitHandler<z.infer<typeof AddVaultSchema>> = (data) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        className="mt-16 pt-16 p-6"
        onSubmit={form.handleSubmit(submitForm)}
      >
        كود الخزنة اسم الخزنة
        <h2 className="text-lg font-medium mb-4">إضافة خزنة</h2>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="vaultCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>كود الخزنة</FormLabel>
                  <FormControl>
                    <Input placeholder="من فضلك ادخل كود الخزنة" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="vaultName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>اسم الخزنة</FormLabel>
                  <FormControl>
                    <Input placeholder="من فضلك ادخل اسم الخزنة" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="currentBalance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>رصيد الخزنة الحالي</FormLabel>
                  <FormControl>
                    <Input placeholder="من فضلك ادخل رصيد الخزنة" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>وصف الخزنة</FormLabel>
                <FormControl>
                  <Textarea placeholder="من فضلك ادخل وصف الخزنة" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button className="mr-2 bg-light-blue text-white">
            الرجوع للرئيسية
          </Button>
          <Button className="bg-teal-500 text-white" type="submit">
            إضافة جديدة
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default AddVault;
