
import { useSearchContext } from "../../lib/hooks/useSearchContext"

export default function SearchForm() {
    const { searchQuery, handleSearchQuery } = useSearchContext()

    return (

        <div className="col-start-1 col-span-1 row-span-1">
            <input value={searchQuery} onChange={(e) => handleSearchQuery(e.target.value)} className="bg-violet-400 text-white placeholder:text-white placeholder:px-2 w-full rounded-md px-1 py-2 " placeholder="Search mentees" type="text" />

        </div >

    )
}
