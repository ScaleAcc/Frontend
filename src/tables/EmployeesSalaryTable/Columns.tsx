"use client";

import { ColumnDef } from "@tanstack/react-table";
import ActionsMenu from "./ActionMenu";

export type data = {
  date: string;
  code: string;
  id: string;
  salary: string;
};
export const columns: ColumnDef<data>[] = [
  {
    accessorKey: "salary",
    header: () => <div className="text-right">salary</div>,
  },
  {
    accessorKey: "date",
    header: () => <div className="text-right">date</div>,
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const detail = row.original;

      return <ActionsMenu detail={detail} />;
    },
  },
];
