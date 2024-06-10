import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'//importacion por defecto
//import { App } from './App.jsx'//importacion nombrada entre llaves
import './index.css'
import Shen from './Test.jsx'
import ButtonState from './Components/ButtonState.jsx'
import ButtonStyle from './Components/Counter.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <App />
    <Shen />
    <ButtonState />
    <ButtonStyle />





  </React.StrictMode>,
)
