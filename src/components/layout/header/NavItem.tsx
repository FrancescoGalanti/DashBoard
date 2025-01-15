type NavItemProp = {
    children: React.ReactNode
}

export default function NavItem({ children }: NavItemProp) {
    return (
        <li>
            {children}
        </li>
    )
}
