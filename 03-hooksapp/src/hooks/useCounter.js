import { useState } from "react"

export const useCounter = ( {initialValue = 1}) => {
    
    const [counter, setCounter] = useState(initialValue)
    
    const increment = () => setCounter( counter + 1)
    const reset = () => setCounter(initialValue)
    const decrease = () => setCounter( counter - 1)
    
    return { counter , increment, reset, decrease }
}