import { createContext, ReactNode, useEffect, useState } from "react"
import { useFecth } from "../../lib/hooks/useFecth";
import { apiUser } from "../../lib/costant";
import { Mentee, MenteeEsential } from "../../lib/types";
type TMenteeContext = {
    mentees: Mentee[],
    isLoading: boolean,
    error: string | null | undefined,
    totaltMentess: number | undefined,
    activeMenteeId: null | number,
    handleActiveMentee: (menteeId: number) => void,
    selectedMentee?: Mentee | undefined,
    addNewMentees: (newMentee: MenteeEsential) => void,
    removeMentess: () => void,
    updateMentess: (mentee: MenteeEsential, id: Mentee["id"]) => void
}
export const MenteeContext = createContext<TMenteeContext | null>(null);
type MenteeContextProvider = {
    children: ReactNode
}

export default function MenteeContextProvider({ children }: MenteeContextProvider) {
    const { data, isLoading, error } = useFecth(apiUser)

    const [mentees, setMentees] = useState<Mentee[]>([])
    const [activeMenteeId, setActiveMenteeId] = useState<null | number>(null)

    const totaltMentess = mentees?.length;
    const selectedMentee = mentees?.find(element => element.id === activeMenteeId);

    useEffect(() => {
        if (data)
            setMentees(data);
    }, [data])

    function addNewMentees(newMentee: MenteeEsential) {
        const newMenteeId = Date.now();
        setMentees(prev =>
            [
                {
                    id: newMenteeId,
                    ...newMentee
                },
                ...prev,
            ]
        )
        setActiveMenteeId(newMenteeId)
    }

    function removeMentess() {
        setMentees(prev => prev.filter(mentee => mentee.id !== activeMenteeId))
        setActiveMenteeId(null);
    }

    function updateMentess(mentee: MenteeEsential, id: Mentee["id"]) {
        setMentees(prev => prev.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    ...mentee
                }
            }
            return item
        }))
    }

    function handleActiveMentee(menteeId: number) {
        setActiveMenteeId(menteeId)
    }

    return (
        <MenteeContext.Provider value={{ mentees, isLoading, error, totaltMentess, activeMenteeId, handleActiveMentee, selectedMentee, addNewMentees, removeMentess, updateMentess }}>
            {children}
        </MenteeContext.Provider>
    )
}
