import { LayoutDashboard, User } from "lucide-react"
import NavItem from "./NavItem"

const routes = [{
    label: "Dashboard",
    icon: <LayoutDashboard size={16} />,
    href: "/dashboard"
},
{
    label: "Account",
    icon: <User size={16} />,
    href: "/account"
}]

export default function MainNav() {
    const activeRoute = "/dashboard";
    return (
        <nav>
            <ul className="flex gap-8">
                {
                    routes.map(element => (
                        <NavItem key={element.href}>
                            <a className={` rounded-sm py-1 px-2 flex gap-1 items-center ${element.href === activeRoute ? "bg-black/25" : ""}`} href={element.href}>
                                {element.icon}
                                {element.label}
                            </a>
                        </NavItem>
                    ))
                }
            </ul>
        </nav>
    )
}
