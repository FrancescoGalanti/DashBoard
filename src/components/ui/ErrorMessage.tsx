import { ReactNode } from "react"

type ErrorMessageProps = {
    children: ReactNode
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
    return (
        <div className="bg-red-300 px-4 text-red-700 text-sm shadow text-center py-1 rounded-sm">
            {children}
        </div>
    )
}
