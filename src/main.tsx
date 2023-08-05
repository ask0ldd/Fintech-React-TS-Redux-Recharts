import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CustomRouter from './components/CustomRouter'
import { store } from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomRouter />
    </Provider>
  </React.StrictMode>
)
