import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
    children: ReactNode,
    className?: string,
    variance?: 'default' | 'outline' | 'icon'

} & React.ComponentPropsWithoutRef<"button">

const btnVariance = {
    default: "bg-primaryDark text-white font-semibold",
    outline: "border",
    icon: " flex min-w-10 h-10 bg-primaryDark justify-center items-center"
}

export default function Button({ children, className, variance = "default", ...props }: ButtonProps) {
    return (
        <button {...props} className={twMerge('min-w-20 px-2 py-1 rounded-full', btnVariance[variance], className)}>
            {children}
        </button>
    )
}
