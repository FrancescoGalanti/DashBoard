import { Handshake } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

type LogoProps = {
    className?: string,
    iconSize?: number
}

export default function Logo({ className, iconSize = 20 }: LogoProps) {
    return (
        <a className={twMerge('flex items-center gap-2', className)} href='/'>
            < Handshake size={iconSize} />
            <p>Mentor Assistant</p>
        </a >
    )
}
