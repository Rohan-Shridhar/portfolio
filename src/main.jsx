import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { applyEnvironment, getInitialEnvironment } from './theme.js'

import "@fortawesome/fontawesome-free/css/all.min.css";

applyEnvironment(getInitialEnvironment());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
