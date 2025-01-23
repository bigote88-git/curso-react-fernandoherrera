import { useState } from "react"
import '../index.css'

export const CounterApp = () => {
    
    const [counter, setCounter] = useState({
        first: 10,
        middle: 20,
        last: 30
    })
    
    const handleClick = () => {
        setCounter((counter) => {
            const { first, middle, last} = counter
            return {
                ...counter,
                middle: middle + 1,
            }
        })
    }
    
    return (
        <div className="container-app">
            <h2 className="container-app title">Counter #{counter.first}</h2>
            <h2 className="container-app title">Counter #{counter.middle}</h2>
            <h2 className="container-app title">Counter #{counter.last}</h2>
            <section className="container-app buttons">
                <button className="container-app button" onClick={handleClick}>+</button>
            </section>
        </div>
    )
    
}