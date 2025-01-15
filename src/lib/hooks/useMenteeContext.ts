import { useContext } from "react";
import { MenteeContext } from "../../components/context/MenteeContextProvider";


export function useMenteeContext() {
    const context = useContext(MenteeContext);

    if (!context) {
        throw new Error("the useMenteeContext is outside the MenteeContextProvider")
    }

    return context
}
