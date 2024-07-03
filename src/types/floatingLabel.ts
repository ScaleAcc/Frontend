import React from "react"

export type TFloatingLabel = {
    type: "text" | "password" | "email" | "date",
    label: string,
    value: string,
    onChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
}