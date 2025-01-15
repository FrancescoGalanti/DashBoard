
import { SearchCheck } from 'lucide-react'

export default function SplashScreen() {
    return (
        <section className="h-full  flex flex-col justify-center items-center">
            <div className='space-y-2'>
                <SearchCheck className='text-primaryDark' size={40} />
                <h2 className='text-xl font-bold text-black'>No Mentee Selected </h2>
                <p>Click a mentee from the list to view details</p>
            </div>
        </section>
    )
}
