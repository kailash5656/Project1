import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MonoApp from './Monoapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MonoApp />
  </StrictMode>,
)
