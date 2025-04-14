import { useContext } from "react"
import { UserContext } from "../context/users"

export function AboutPage(){
    
    const { user } = useContext(UserContext);
    
    return (
        <div>
            <h1>About</h1>
            <pre>
                { JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}