import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'//importacion por defecto
//import { App } from './App.jsx'//importacion nombrada entre llaves
import Shen from './Test.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <App />
    <Shen />




  </React.StrictMode>,
)
