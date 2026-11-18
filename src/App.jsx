import { useState } from "react"
import Die from "./comps/Die"
import { nanoid } from "nanoid"
import Confeti from "./comps/Confeti.jsx"



export default function App() {
    
    const [dice, setDice] = useState(generateAllNewDice())

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }))
    }

    function rollDice() {
      setDice(prev => prev.map(die => {
        if (die.isHeld) {
            return {
              ...die
            }
          } else {
            return {
              ...die,
              value: Math.ceil(Math.random() * 6)
            }
          }
      }))
    }

    function holdDice(id) {
        setDice(prevDice => prevDice.map(die => {
          if (die.id === id) {
            return {
              ...die,
              isHeld: !die.isHeld
            }
          } else {
            return die
          }
        }))
    }

    const diceElements = dice.map(
      dieObj => 
      <Die 
        key={dieObj.id} 
        value={dieObj.value} 
        isHeld={dieObj.isHeld} 
        holdDice={holdDice} 
        id={dieObj.id}
      />
    )
    let gameWon = false
    if (
        dice.every(die => die.isHeld) && 
        dice.every(die => die.value === dice[0].value)
    ) {
        gameWon = true
    }

    return (
        <main>
            {gameWon? <Confeti /> : ""}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main>
    )
}