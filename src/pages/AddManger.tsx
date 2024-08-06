import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddVaultSchema } from "@/src/validations/addManger";
import { Button } from "../components/ui/button";
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
import useAddManger from "../hooks/useAddManger";

const AddManger = () => {
  const form = useForm<z.infer<typeof AddVaultSchema>>({
    mode: "onBlur",
    resolver: zodResolver(AddVaultSchema),
  });
  const { mutate } = useAddManger();
  const submitForm: SubmitHandler<z.infer<typeof AddVaultSchema>> = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess(data) {
        console.log(data);
      },
    });
  };
  return (
    <div className="page__container">
      <Heading title="اضافة مدير لوحة تحكم" />
      <Form {...form}>
        <form className="pt-8 p-6" onSubmit={form.handleSubmit(submitForm)}>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mb-4">
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="fisrtName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الاسم الاول </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="من فضلك ادخل الاسم الاول"
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
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الاسم الثاني </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="من فضلك ادخل الاسم الثاني"
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الايميل</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="من فضلك ادخل الايميل "
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
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>رقم التليفون</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="من فضلك ادخل  رقم التليفون"
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
                name="whatsNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>رقم الواتساب</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="من فضلك ادخل  رقم تليفون الواتساب"
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الباسورد</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="من فضلك ادخل  الباسورد"
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
              إضافة جديدة
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default AddManger;
