
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../context/users';
import './LoginPage.css'

export function LoginPage(){
    
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    
    function handleSubmit(event){
        event.preventDefault();
        
        const form = event.target;
        const userName = form.elements.user.value;
        const userPassword = form.elements.password.value;
        
        setUser(prevState => ({
            ...prevState,
            user: userName,
            password: userPassword
        }))
        
        console.log({ userName, userPassword })
        navigate('/about')
    }
    
    
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={ handleSubmit }>
                <div className="input_line">
                    <label htmlFor="user">User</label>
                    <input id="user" name="user" type="text" placeholder='User name' />
                </div>
                <div className="input_line">
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" placeholder='****' />
                </div>
                <div className="input_line">
                    <button>Sign in</button>
                    <a href="#">Register</a>
                </div>
            </form>
        </div>
    )
}