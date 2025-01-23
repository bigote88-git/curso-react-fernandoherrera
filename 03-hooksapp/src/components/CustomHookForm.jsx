import { useForm } from '../hooks/useForm'
import '../index.css'

export const CustomHookForm = () => {
    
    const initialData = {
        username: '',
        email: '',
        password: ''};
    
    const { formData, onInputChange, onReset } = useForm(initialData)
    
    const { username, email, password } = formData
    
    return (
        <div>
            <h2 className="container-app title">Custom Form Hook</h2>
            <form action="#" className="container-app form">
                
                <div className="form-line">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="username"
                    value={username} 
                    onChange={onInputChange} />
                </div>
                
                <div className="form-line">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="test@gmail.com"
                    value={email} 
                    onChange={onInputChange} />
                </div>
                
                <div className="form-line">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="password"
                    value={password} 
                    onChange={onInputChange} />
                </div>
                
            </form>
                <div className="form-line">
                    <button onClick={onReset}>Reset</button>
                </div>
        </div>
        
    )
    
}