import Heading from '@components/common/Heading/Heading'
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
const AccountsTree = () => {
    const form = useForm<z.infer<typeof AddVaultSchema>>({
        mode: "onBlur",
        resolver: zodResolver(AddVaultSchema),
    });
        const submitForm: SubmitHandler<z.infer<typeof AddVaultSchema>> = (data) => {
        console.log(data);
    };
  return (
    <div className="page__container">
        <Heading title="شجرة الحسابات" />

        <Form {...form}>
            <form
            className="pt-8 p-6"
            onSubmit={form.handleSubmit(submitForm)}
            >
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="col-span-1">
                        <FormField
                        control={form.control}
                        name="vaultCode"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>كود الخزنة</FormLabel>
                            <FormControl>
                                <Input placeholder="اختر اسم و نوع الحساب" {...field} />
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
                                <Input placeholder="من فضلك ادخل الكود" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    </div>
                </div>
                <div className="flex justify-end gap-4">
                    <Button variant="default" className="mr-2">حفظ</Button>
                </div>
            </form>
        </Form>
    </div>
  )
}

export default AccountsTree