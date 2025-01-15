
import { twMerge } from "tailwind-merge";
import { useMenteeContext } from "../../lib/hooks/useMenteeContext";
import { getAvatarLetters } from "../../lib/utils/getAvatarLetters";
import Skeleton from "../skeleton/skeleton";
import ErrorMessage from "../ui/ErrorMessage";
import Avatar from "./Avatar";
import { useSearchContext } from "../../lib/hooks/useSearchContext";
import { Plus } from "lucide-react";
import Button from "../ui/Button";
import MenteeForm from "../ui/form/MenteeForm";
import { useState } from "react";


export default function UserCardList() {

    const { searchQuery } = useSearchContext()

    const [isVisible, setIsVisible] = useState(false);

    function showModal() {
        setIsVisible(true)
    }

    function hideModal() {
        setIsVisible(false);
    }


    const { mentees, isLoading, error, activeMenteeId, handleActiveMentee } = useMenteeContext()

    const filteredMentees = mentees?.filter(mentee => mentee.name.toLowerCase().includes(searchQuery.toLowerCase()))

    return (
        <aside className=" h-full grid grid-rows-[1fr_auto]">
            {
                isLoading && (

                    <Skeleton>
                        <Skeleton.List />
                    </Skeleton>
                )
            }
            {
                error && (
                    <ErrorMessage>
                        {error}
                    </ErrorMessage>
                )
            }
            <ul className="space-y-2 overflow-auto">

                {
                    filteredMentees?.map(element => (
                        <li key={element.id} >
                            <button onClick={() => handleActiveMentee(element.id)} className={twMerge(`w-full flex items-center h-10 rounded-full gap-2`, activeMenteeId === element.id && "bg-primary")}>
                                <Avatar name={element.name} />
                                <p>
                                    {element.name}
                                </p>
                            </button>
                        </li>
                    ))
                }

            </ul>
            <div className="mt-4 flex flex-row-reverse">
                <Button onClick={showModal} variance="icon">
                    <Plus size={15} color="white" />
                </Button>
            </div>
            <MenteeForm isVisible={isVisible} hideModal={hideModal} />
        </ aside >
    )
}
