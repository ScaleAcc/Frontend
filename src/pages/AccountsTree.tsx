import Heading from "@components/common/Heading/Heading";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddVaultSchema } from "@/src/validations/addvalut";
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

const AccountsTree = () => {
  const form = useForm<z.infer<typeof AddVaultSchema>>({
    mode: "onBlur",
    resolver: zodResolver(AddVaultSchema),
  });

  const submitForm: SubmitHandler<z.infer<typeof AddVaultSchema>> = (data) => {
    console.log(data);
  };

  return (
    <div className="page__container p-4 md:p-8">
      <Heading title="شجرة الحسابات" />

      <Form {...form}>
        <form className="pt-8" onSubmit={form.handleSubmit(submitForm)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="sm:col-span-2 col-span-1">
              <FormField
                control={form.control}
                name="vaultName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>اختر اسم و نوع الحساب</FormLabel>
                    <FormControl>
                      {/*Note: Replace Input with dropdown*/}
                      <Input placeholder="من فضلك ادخل اسم و نوع الحساب" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="vaultCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الكود</FormLabel>
                    <FormControl>
                      <Input placeholder="من فضلك ادخل الكود" {...field} disabled/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex sm:justify-end justify-center gap-4 mt-12">
            <Button variant="default" className="mr-2">
              حفظ 
            </Button>
          </div>

          {/*Note: ADD Table  Here*/}
        </form>
      </Form>
    </div>
  );
};

export default AccountsTree;
