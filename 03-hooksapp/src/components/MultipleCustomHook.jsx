import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import '../index.css'
import { UserCard } from './UserCard'

export const MultipleCustomHook = () => {
    
    const [count, setCount] = useState(0)    
    const { data, isLoading, error } = useFetch(count)
    
    const { title, first, last } = data
    
    const handleClick = () => {
        setCount(count + 1)
        console.log(count);
    }    
    
    return (
        <div className="container-app">
            <h2 className="container-app title">Random data API</h2>
            {isLoading? 
                <span>Cargando...</span>: 
                <UserCard title={title} firstName={first} lastName={last} />}
            <button className='container-app button' onClick={handleClick}>Click</button>
        </div>
    )
    
}