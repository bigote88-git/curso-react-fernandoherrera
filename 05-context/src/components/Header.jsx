import { Link, NavLink } from 'react-router'
import './Header.css'

export function Header(){
    return (
        <header>
            <h1 className='main-title'>Context API</h1>
            <nav>
                <NavLink className="nothing" to="/">Home</NavLink>
                <NavLink className="nothing" to="/login">Login</NavLink>
                <NavLink className="nothing" to="/about">About</NavLink>
            </nav>
        </header>
    )
}