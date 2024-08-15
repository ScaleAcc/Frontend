import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
import Heading from "../components/common/Heading/Heading";
import SuccessToast from "@components/toasts/SuccessToast";
import ErrorToast from "@components/toasts/ErrorToast";
import getemployee from "../hooks/useGetEmployee";
import useEditEmployee from "../hooks/useEditEmployee";
import { addEmployee } from "../validations/addEmployee";
import getCountries from "../hooks/useGetCountries";

const EditEmployee = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;

  const form = useForm<z.infer<typeof addEmployee>>({
    mode: "onBlur",
    resolver: zodResolver(addEmployee),
  });

  const { mutate } = useEditEmployee(id);
  const [dataCountry, setDataCountry] = useState([
    { id: 1, code: "48512", country_name: "sbdh" },
  ]);
  const [currCountry, setCurrCountry] = useState("");
  useEffect(() => {
    const fetchAdminData = async () => {
      const fetchedAdminData = await getemployee(id);
      const countries = await getCountries();
      setDataCountry(countries);
      setCurrCountry(fetchedAdminData.country.country_name);
      form.reset({
        Fname: fetchedAdminData.Fname,
        Lname: fetchedAdminData.Lname,
        current_salary: fetchedAdminData.current_salary,
        phone_number: fetchedAdminData.phone_number,
        whatsapp_number: fetchedAdminData.whatsapp_number,
        status: fetchedAdminData.status,
        country_id: fetchedAdminData.country.country_name,
      });
    };

    fetchAdminData();
  }, [id, form]);

  const submitForm: SubmitHandler<z.infer<typeof addEmployee>> = (data) => {
    mutate(data, {
      onSuccess(data) {
        if (data.code) {
          SuccessToast("تم تعديل الموظف بنجاح", navigate, "/all-employees");
        } else {
          ErrorToast(data.error.message);
        }
      },
    });
  };

  return (
    <div className="page__container">
      <Heading title={`تعديل موظف #${id}`} />

      <Form {...form}>
        <form className="pt-8 p-6" onSubmit={form.handleSubmit(submitForm)}>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mb-4">
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="Fname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الاسم الاول</FormLabel>
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
                name="Lname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الاسم الثاني</FormLabel>
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
                name="current_salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>المرتب</FormLabel>
                    <FormControl>
                      <Input placeholder="من فضلك ادخل المرتب" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>رقم التليفون</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="من فضلك ادخل رقم التليفون"
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
                name="whatsapp_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>رقم الواتساب</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="من فضلك ادخل رقم تليفون الواتساب"
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
                name="country_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>اسم المحافظة او الدولة </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={currCountry} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {dataCountry.map((country) => (
                          <SelectItem
                            key={country.id}
                            value={String(country.id)}
                          >
                            {country.country_name}
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
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> الحالة</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="من فضلك اختر حالة الموظف " />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={"Enabled"}>{"غير متاح"}</SelectItem>
                        <SelectItem value={"Disabled"}>{"متاح"}</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button className="mr-2">الرجوع للرئيسية</Button>
            <Button variant="secondary" type="submit">
              تعديل
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EditEmployee;
