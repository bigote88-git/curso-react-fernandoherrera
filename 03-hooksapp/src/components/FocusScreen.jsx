import { useRef } from "react"

export const FocusScreen = () => {
    
    const inputRef = useRef()
    
    const onClick = () => {
        inputRef.current.select()
    }
    
    return (
        <div>
            <input ref={inputRef} type="text" name="commentary" placeholder="i had something" />
            <button onClick={onClick}>Focus</button>
        </div>
    )
}