import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'//importacion por defecto
//import { App } from './App.jsx'//importacion nombrada entre llaves
import './index.css'
import Shen from './Test.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <App />
    <Shen />




  </React.StrictMode>,
)
