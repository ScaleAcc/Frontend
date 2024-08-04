import { useEffect, useState } from "react";
import Heading from "@components/common/Heading/Heading";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AccountTree } from "@/src/validations/AccountsTree";
import { Button } from "../components/ui/button";
import { Input } from "@components/ui/input";
import { z } from "zod";
import { decrypt } from "../utils/Utilty";
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
import useAccountsTree from "../hooks/useAccountsTree";

const AccountsTree = () => {
  const [dataNameAccount, setDataNameAccount] = useState([
    { id: 1, name: "الموظفين" },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token") || "";
        const res = await fetch(
          "https://trombetta.mzservices.online/public/api/entities",
          {
            headers: {
              authorization: `Bearer ${decrypt(
                token,
                import.meta.env.VITE_TOKEN_SECRET
              )}`,
            },
          }
        );
        const data = await res.json();
        console.log(data.data);
        setDataNameAccount(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const form = useForm<z.infer<typeof AccountTree>>({
    mode: "onBlur",
    resolver: zodResolver(AccountTree),
  });
  const { mutate } = useAccountsTree();
  const submitForm: SubmitHandler<z.infer<typeof AccountTree>> = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess(data) {
        console.log(data);
      },
    });
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
                name="nameAccount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>اسم الحساب</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="من فضلك اختر رقم الحساب " />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {dataNameAccount.map((nameAccount) => (
                          <SelectItem
                            key={nameAccount.id}
                            value={nameAccount.name}
                          >
                            {nameAccount.name}
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
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الكود</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="من فضلك ادخل الكود"
                        {...field}
                      />
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
        </form>
      </Form>
    </div>
  );
};

export default AccountsTree;
