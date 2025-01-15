import { getAvatarLetters } from "../../lib/utils/getAvatarLetters";
type AvatarProps = {
    name: string
}

export default function Avatar({ name }: AvatarProps) {
    return (
        <div className="text-white font-semibold text-sm bg-purple-800 h-10 w-10 rounded-full flex items-center justify-center ">
            {getAvatarLetters(name)}
        </div>
    )
}
