import { useEffect, useState } from "react"
import { Mentee } from "../types"

export function useFecth(url: string) {
    const [data, setData] = useState<Mentee[] | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>()

    useEffect(() => {
        setIsLoading(true)

        async function getData() {
            await new Promise(resolve => setTimeout(resolve, 3000));
            try {
                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const data = await response.json()

                setData(data);

            } catch (error: Error | unknown) {
                if (error instanceof Error) {
                    setError(error.message)
                }
            } finally {
                setIsLoading(false)
            }
        }

        getData()
    }, [url])

    return { data, isLoading, error }
}