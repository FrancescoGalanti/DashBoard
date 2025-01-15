
import { twMerge } from "tailwind-merge"

type DashBoardBottom = {
    className?: string,
    children: React.ReactNode

}
export default function DashBoardBottom({ className, children }: DashBoardBottom) {
    return (
        <section className={twMerge(className)}>
            <div className=" container grid  grid-cols-3  grid-rows-[auto_500px] gap-4">
                {children}
            </div>
        </section>
    )
}
