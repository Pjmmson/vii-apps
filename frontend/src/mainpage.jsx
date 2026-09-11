import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ViiApp from './ViiApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ViiApp />
  </StrictMode>,
)
