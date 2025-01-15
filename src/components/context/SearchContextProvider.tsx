import { createContext, ReactNode, useState } from "react";

type SearchContextProviderProps = {
    children: ReactNode
}

type TSearchContext = {
    searchQuery: string,
    handleSearchQuery: (value: string) => void
}

export const SearchContext = createContext<TSearchContext | null>(null);



export default function SearchContextProvider({ children }: SearchContextProviderProps) {
    const [searchQuery, setSearchQuery] = useState("")

    function handleSearchQuery(value: string) {
        setSearchQuery(value)
    }
    return (
        <SearchContext.Provider value={{ searchQuery, handleSearchQuery }} >
            {children}
        </SearchContext.Provider >
    )
}
