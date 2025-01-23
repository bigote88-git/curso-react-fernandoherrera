import { createRoot } from 'react-dom/client'
import { HookApp } from './HookApp.jsx'

import './theme.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <HookApp />
  // </StrictMode>,
)
