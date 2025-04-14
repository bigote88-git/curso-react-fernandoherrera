import { Navigate, Route, Routes } from "react-router";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";

export function Main(){
    
    return(
        <main>
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="login" element={ <LoginPage />} />
                <Route path="about" element={ <AboutPage />} />
                
                <Route path="/*" element={ <Navigate to="/about" />} />
            </Routes>
        </main>
    )
}