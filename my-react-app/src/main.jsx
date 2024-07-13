import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const myName = 'Pipe'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Hello Mr. {myName}</h1>
    <App />
  </React.StrictMode>,
)