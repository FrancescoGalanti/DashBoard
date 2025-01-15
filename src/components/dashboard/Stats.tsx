
import { useMenteeContext } from "../../lib/hooks/useMenteeContext"


export default function Stats() {
    const { totaltMentess } = useMenteeContext()
    return (
        <section>
            <p className="text-center">
                <span className="block">
                    {totaltMentess ?? "is loading"}
                </span>
                active mentees
            </p>
        </section>
    )
}
