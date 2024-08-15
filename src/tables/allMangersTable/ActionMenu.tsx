import { MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { decrypt } from "../../utils/Utilty";

import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { data } from "./Columns";
const ActionsMenu: React.FC<{ detail: data }> = ({ detail }) => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const showModal = () => {
    MySwal.fire({
      title: "تفاصيل",
      html: (
        <div>
          <p>الاسم: {detail.first_name}</p>
          <p>البريد الإلكتروني: {detail.email}</p>
          <p>رقم الهاتف: {detail.phone_number}</p>
        </div>
      ),
      showCloseButton: true,
    });
  };

  const handleEdit = () => {
    const id = detail.id;
    navigate("/edit-manger", { state: { id } });
  };

  const handleDelete = () => {
    const token = localStorage.getItem("token") || "";

    fetch(
      `https://trombetta.mzservices.online/public/api/managers/${detail.id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${decrypt(
            token,
            import.meta.env.VITE_TOKEN_SECRET
          )}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>اختر</DropdownMenuLabel>
        <DropdownMenuItem onClick={handleEdit}>تعديل</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDelete}>حذف</DropdownMenuItem>
        <DropdownMenuItem onClick={showModal}>عرض</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ActionsMenu;
