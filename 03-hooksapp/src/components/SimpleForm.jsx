import { useEffect, useState } from 'react'
import '../index.css'
import { UserMessage } from './UserMessage'

export const SimpleForm = () => {
    
    const [userData, setUserData] = useState({
        username: 'bigotin',
        email: 'bigote@gmail.com'
    })
    
    const onInputChange = (event) => {        
        const input = event.target        
        setUserData({
            ...userData,
            [input.name]: input.value
        })
    }
    
    useEffect(() => {
        
    }, [userData.email])
    
    return (
        <div>
            <h2 className="container-app title">Use Effect Form</h2>
            <form action="#" className="container-app form">
                <div className="form-line">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="username"
                    value={userData.username} 
                    onChange={onInputChange} />
                </div>
               {userData.username === 'pepito' && <UserMessage />}
                
                <div className="form-line">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="test@gmail.com"
                    value={userData.email} 
                    onChange={onInputChange} />
                </div>                
                <div className="form-line">
                    <button>Login</button>
                </div>
            </form>
        </div>
        
    )
    
}