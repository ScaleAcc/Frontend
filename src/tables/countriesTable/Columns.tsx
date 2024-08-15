"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Valuts = {
  id: number;
  code: string;
  country_name: string;
};

export const columns: ColumnDef<Valuts>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-right">ID</div>,
  },
  {
    accessorKey: "code",
    header: () => <div className="text-right">Code</div>,
  },
  {
    accessorKey: "country_name",
    header: () => <div className="text-right">Country Name</div>,
  },
];
