import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddVaultSchema } from "@/src/validations/addvalut";
import { Button } from "../components/ui/button";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import { Input } from "@components/ui/input";

interface Iprops {
  vaultCode: string;
  vaultName: string;
  currentBalance: string;
  description: string;
}

const AddVault = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iprops>({
    mode: "onBlur",
    resolver: zodResolver(AddVaultSchema),
  });
  const submitForm: SubmitHandler<Iprops> = (data) => {
    console.log(data);
  };
  return (
    <form className="mt-16 pt-16 p-6" onSubmit={handleSubmit(submitForm)}>
      <h2 className="text-lg font-medium mb-4">إضافة خزنة</h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="col-span-1">
          <Label htmlFor="vaultCode">كود الخزنة</Label>
          <Input
            type="text"
            id="vaultCode"
            placeholder="كود الخزنة"
            {...register("vaultCode")}
          />
          {errors.vaultCode && (
            <span className="text-red-500 text-sm mt-1">
              {errors.vaultCode.message}
            </span>
          )}
        </div>
        <div className="col-span-1">
          <Label htmlFor="vaultName">اسم الخزنة</Label>
          <Input
            type="text"
            id="vaultName"
            placeholder="اسم الخزنة"
            {...register("vaultName")}
          />
          {errors.vaultName && (
            <span className="text-red-500 text-sm mt-1">
              {errors.vaultName.message}
            </span>
          )}
        </div>
        <div className="col-span-1">
          <Label htmlFor="currentBalance">رصيد الخزنة الحالي</Label>
          <Input
            type="text"
            id="currentBalance"
            placeholder="رصيد الخزنة الحالي"
            {...register("currentBalance")}
          />
          {errors.currentBalance && (
            <span className="text-red-500 text-sm mt-1">
              {errors.currentBalance.message}
            </span>
          )}
        </div>
      </div>
      <div className="mb-4">
        <Label htmlFor="description">بيان</Label>
        <Textarea
          id="description"
          placeholder="بيان"
          {...register("description")}
        />
        {errors.description && (
          <span className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </span>
        )}
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
  );
};
export default AddVault;
