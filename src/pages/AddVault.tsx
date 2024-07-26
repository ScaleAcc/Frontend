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
import Heading from "../components/common/Heading/Heading";
import React from "react";

const AddVault = () => {
  const form = useForm<z.infer<typeof AddVaultSchema>>({
    mode: "onBlur",
    resolver: zodResolver(AddVaultSchema),
  });
  const submitForm: SubmitHandler<z.infer<typeof AddVaultSchema>> = (data) => {
    console.log(data);
  };
  return (
    <div className="page__container">
    <Heading title="اضافة خزنة"/>
    <Form {...form}>
      <form
        className="pt-8 p-6"
        onSubmit={form.handleSubmit(submitForm)}
      >
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
        <div className="flex justify-end gap-4">
          <Button className="mr-2">الرجوع للرئيسية</Button>
          <Button variant="secondary" type="submit">
            إضافة جديدة
          </Button>
        </div>
      </form>
    </Form>
    </div>
  );
};
export default AddVault;
