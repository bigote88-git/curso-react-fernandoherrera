import { memo } from 'react';
import '../index.css'

export const CounterText = memo(({ value }) => {
    
    console.log('entre papu');
    return (
        <small className="counter-text">{value}</small>
    )    
})