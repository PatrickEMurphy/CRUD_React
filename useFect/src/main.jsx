import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Fesh from './fesh.jsx'
import EX from './examen_t5.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EX />
  </StrictMode>,
)
