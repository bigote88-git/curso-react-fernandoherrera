import { useEffect, useState } from "react"
import { fetchGift } from "../helpers/getGifts.js"

export function useFetchGift(category){

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchGift(category).then(data => setImages(data))
        setIsLoading(false)
    }, [category])

    return { images, isLoading }
}