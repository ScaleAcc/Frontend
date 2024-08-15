"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Valuts = {
  id: number;
  code: string;
  safe_name: string;
  balance: string;
};

export const columns: ColumnDef<Valuts>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "balance",
    header: "Balance",
  },
  {
    accessorKey: "safe_name",
    header: "Safe Name",
  },
];
