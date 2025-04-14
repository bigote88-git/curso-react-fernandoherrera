

import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { UserProvider } from './context/users'

function App() {  

  return (
    <UserProvider>
      <Header />
      <Main />
    </UserProvider>
  )
}

export default App
