"use client";

import { ColumnDef } from "@tanstack/react-table";
import ActionsMenu from "./ActionMenu";

export type data = {
  first_name: number;
  last_name: string;
  email: string;
  phone_number: string;
  code: string;
  id: string;
  whatsapp_number: string;
};
export const columns: ColumnDef<data>[] = [
  {
    accessorKey: "first_name",
    header: () => <div className="text-right">Name</div>,
  },
  {
    accessorKey: "phone_number",
    header: () => <div className="text-right">Number</div>,
  },
  {
    accessorKey: "email",
    header: () => <div className="text-right">Email</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const detail = row.original;

      return <ActionsMenu detail={detail} />;
    },
  },
];
