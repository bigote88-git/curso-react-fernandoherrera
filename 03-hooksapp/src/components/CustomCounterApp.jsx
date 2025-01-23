import { useCounter } from '../hooks/useCounter'
import '../index.css'

export const CustomCounterApp = () => {
    
    const { counter, increment, reset, decrease } = useCounter({initialValue: 5});
    
    return (
        <div className="container-app">
            <h2 className="container-app title">Counter with Custom Hook #{counter}</h2>
            <section className="container-app buttons">
                <button className="container-app button" onClick={decrease}>-1</button>
                <button className="container-app button" onClick={reset}>Reset</button>
                <button className="container-app button" onClick={increment}>+1</button>
            </section>
        </div>
    )
}