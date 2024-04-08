import PropTypes from 'prop-types'
import { useState } from 'react';
import './CounterApp.css'

/*
let spanNumber = document.querySelector('span')

const handledSustract = () => {
    if(!spanNumber)
        spanNumber = document.querySelector('span');
    
    spanNumber.innerText = Number(spanNumber.textContent) - 1;
}

const handledAdd = () => {
    if(!spanNumber)
        spanNumber = document.querySelector('span');
        
    spanNumber.innerText = Number(spanNumber.textContent) + 1;
}*/

export const CounterApp = ( { value }) => {
    
    const [counter, setCounter ] = useState(value)
    
    const handleAdd = () => {
        setCounter(counter + 1)
    }
    
    const handleSustract = () => {
        setCounter(counter - 1)
    }
    
    const resetCounter = () => {
        setCounter(value)
    }
    
    return(
        <>
            <h2>Counter App</h2>
            <button onClick={ handleSustract }>-</button>
            <span>{ counter }</span>
            <button onClick={ handleAdd }>+</button>       
            <a href="#" class='reset-count' onClick={ resetCounter }>Reset counter</a>       
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}