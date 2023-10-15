import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Anime from './Contexts/MainContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Anime>
    <App />
    </Anime>    
  </React.StrictMode>
)
