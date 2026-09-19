import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { applyEnvironment, getInitialEnvironment } from './theme.js'
import { inject } from '@vercel/analytics';
import "@fortawesome/fontawesome-free/css/all.min.css";

inject();
applyEnvironment(getInitialEnvironment());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
