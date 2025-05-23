import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    
  </BrowserRouter>
    <App />
  </StrictMode>,
)
