import { useMemo, useState } from "react"

const doSomethingHeavyStuff = (count) => {
    
    for(let i = 0; i < count; i++)
        console.log(`do something #${count} once`)
    
    return `do something #${count} once`
}


export const MemoApp = () => {
    
    const [counter, setCounter] = useState(1)
    const [hiden, setHiden] = useState(false)
    
    const memorizedValue = useMemo(()=> {
        doSomethingHeavyStuff(counter)
    }, [counter])
    
    const onIncrement = () => {
        setCounter(counter + 1)
    }
    
    const onShowHide = () => {
        setHiden(!hiden)
    }
    
    return (
        <div>
            <h2>Counter with useMemo <small className="counter-text">{counter}</small></h2>
            <h2>Something heavy stuff ${memorizedValue}</h2>
            <div>
                <button onClick={onIncrement}>Increment +1</button>
                <button onClick={onShowHide}>Show/Hidden { JSON.stringify(hiden)}</button>
            </div>
        </div>
    )
}