import { useState, useEffect } from 'react'
import Buttons from './comps/Buttons.jsx'
import './App.css'

function App() {

  let [numbers, setNumbers] = useState(Array(12).fill(null))

  useEffect(() => {
    generateAllNewDice()
  }, [])

  function generateAllNewDice() {
    setNumbers(prev => 
      prev.map(() => Math.floor(Math.random() * 6) + 1)
    )
  }

  return (
      <main className="main-container" onLoad={generateAllNewDice}>
        <Buttons numbers={numbers} />
        <br/><br/>
        <button className="main-button" onClick={generateAllNewDice}>
          Roll
        </button>
      </main>
  )
}

export default App
