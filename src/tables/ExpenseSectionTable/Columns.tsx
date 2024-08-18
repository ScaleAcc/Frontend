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
    accessorKey: "name",
    header: () => <div className="text-right">name</div>,
  },
  {
    accessorKey: "code",
    header: () => <div className="text-right">code</div>,
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const detail = row.original;

      return <ActionsMenu detail={detail} />;
    },
  },
];
