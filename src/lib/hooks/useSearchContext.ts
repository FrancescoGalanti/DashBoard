import { useContext } from "react";
import { SearchContext } from "../../components/context/SearchContextProvider";

export function useSearchContext() {
    const context = useContext(SearchContext);

    if (!context) {
        throw new Error("the useSearchContext is outside the SearchContextProvider")
    }

    return context
}
