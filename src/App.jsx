import { React, useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'



function App() {
  const[currentSection, setCurrentSection] = useState('home');

  return (
    <div className='main'>
      <div className="title-container">
        <h1>Mundología</h1>
      </div>
      <Home />
    </div>
  )
}



export default App
