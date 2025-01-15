import { twMerge } from "tailwind-merge"

type CardLayoutProps = {
    children: React.ReactNode,
    className?: string
}

export default function CardLayout({ children, className }: CardLayoutProps) {
    return (
        <div className={twMerge(" bg-white rounded-md p-4", className)}>
            {children}
        </div>
    )
}
