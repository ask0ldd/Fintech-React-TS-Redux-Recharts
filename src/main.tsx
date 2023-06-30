import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CustomRouter from './components/CustomRouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CustomRouter />
  </React.StrictMode>
)
