import { ReactNode } from "react"
import List from "./List";

type SkeletonProps = {
    children: ReactNode
}

export default function Skeleton({ children }: SkeletonProps) {
    return (
        <div className="animate-pulse">
            {children}
        </div>
    )
}


Skeleton.List = List;
