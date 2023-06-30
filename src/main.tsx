import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CustomRouter from './components/CustomRouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
