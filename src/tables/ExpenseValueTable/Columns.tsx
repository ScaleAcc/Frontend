"use client";

import { ColumnDef } from "@tanstack/react-table";
import ActionsMenu from "./ActionMenu";

export type data = {
  code: string;
  id: string;
  receipt_code: string;
  expense_value: string;
  any_comments: string;
};
export const columns: ColumnDef<data>[] = [
  {
    accessorKey: "receipt_code",
    header: () => <div className="text-right">receipt_code</div>,
  },
  {
    accessorKey: "expense_value",
    header: () => <div className="text-right">expense_value</div>,
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const detail = row.original;

      return <ActionsMenu detail={detail} />;
    },
  },
];
