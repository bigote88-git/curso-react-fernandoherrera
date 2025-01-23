import { useCallback, useState } from "react"
import { ButtonCounter } from "./ButtonCounter"

export const UseCallBackApp = () => {
    
    const [counter, setCounter] = useState(5)
    
    const incrementUseCallback = useCallback(() => {
        setCounter((prev) => prev + 1 )
    }, [])
    
    const increment = () => {
        setCounter(counter + 1)
    }
    
    return (
        <div>
            <h2>Use Callback Example {counter}</h2>
            <ButtonCounter incrementFunction={incrementUseCallback} />
        </div>
    )
}