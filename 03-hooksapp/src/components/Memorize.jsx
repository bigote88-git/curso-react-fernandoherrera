import { useState } from "react"
import { CounterText } from "./CounterText"

export const Memorize = () => {
    
    const [counter, setCounter] = useState(1)
    const [hiden, setHiden] = useState(false)
    
    const onIncrement = () => {
        setCounter(counter + 1)
    }
    
    const onShowHide = () => {
        setHiden(!hiden)
    }
    
    return (
        <div>
            <h2>Counter <CounterText value={counter} /></h2>
            <div>
                <button onClick={onIncrement}>Increment +1</button>
                <button onClick={onShowHide}>Show/Hidden { JSON.stringify(hiden)}</button>
            </div>
        </div>
    )
}