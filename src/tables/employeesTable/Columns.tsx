"use client";

import { ColumnDef } from "@tanstack/react-table";
import ActionsMenu from "./ActionMenu";

export type data = {
  Fname: string;
  Lname: string;
  status: string;
  current_salary: string;
  phone_number: string;
  code: string;
  id: string;
  whatsapp_number: string;
};
export const columns: ColumnDef<data>[] = [
  {
    accessorKey: "Fname",
    header: () => <div className="text-right">Name</div>,
  },
  {
    accessorKey: "phone_number",
    header: () => <div className="text-right">Number</div>,
  },
  {
    accessorKey: "current_salary",
    header: () => <div className="text-right">salary</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const detail = row.original;

      return <ActionsMenu detail={detail} />;
    },
  },
];
