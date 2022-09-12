import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PrimeiroComponente from './components/PrimeiroComponente/index'
import ComponentePai from './components/ComponentePai'
import Contador from './components/Contador'
import ComponenteDinamico from './components/ComponenteDinamico'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ComponenteDinamico />
  </React.StrictMode>
)
