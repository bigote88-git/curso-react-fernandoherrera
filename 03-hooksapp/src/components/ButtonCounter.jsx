import { memo } from "react";

export const ButtonCounter = memo(({ incrementFunction }) => {
    
    console.log('ButtonCounter: you can see me! ');
    
    return (
        <button onClick={incrementFunction}>Increment ++</button>
    )
})