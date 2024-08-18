"use client";

import { ColumnDef } from "@tanstack/react-table";
import ActionsMenu from "./ActionMenu";

export type data = {
  name: string;
  code: string;
  id: string;
};
export const columns: ColumnDef<data>[] = [
  {
    accessorKey: "code",
    header: () => <div className="text-right">code</div>,
  },
  {
    accessorKey: "expense_type_name",
    header: () => <div className="text-right">expense_type_name</div>,
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const detail = row.original;

      return <ActionsMenu detail={detail} />;
    },
  },
];
