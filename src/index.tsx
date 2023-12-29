import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { BeepRC } from './context'
import { App } from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(<StrictMode><BeepRC><App /></BeepRC></StrictMode>)