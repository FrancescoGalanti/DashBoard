import { twMerge } from "tailwind-merge"

type DashBoardTopProps = {
    children: React.ReactNode
    className?: string
}
export default function DashBoardTop({ children, className }: DashBoardTopProps) {
    return (
        <section className={twMerge("bg-primaryDark pt-10 pb-40  text-white", className)}>
            <div className="container flex justify-between">
                {children}
            </div >
        </section >

    )
}
