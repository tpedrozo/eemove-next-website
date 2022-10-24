import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export function Button(props: ButtonProps) {
    return (
        <button className="mx-auto mt-8 w-full bg-[#3e63ad] px-6 py-3 text-sm font-bold text-white rounded">{props.text}</button>
    )
}