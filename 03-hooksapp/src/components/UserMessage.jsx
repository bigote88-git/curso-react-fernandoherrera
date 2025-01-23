import { useEffect } from "react"

export const UserMessage = () => {
    
    useEffect(() => {
        
        const onMouseEvent = ({ x, y }) => {
            const coords = { x, y }
            console.log(coords);
        }
        
        window.addEventListener('mousemove', onMouseEvent)    
        
        return () => {
            window.removeEventListener('mousemove', onMouseEvent)
            console.log('Component unmount');
        }
    }, [])
    
    return (
        <span>User is not valid</span>
    )
}