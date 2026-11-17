import { useState } from "react"
import Die from "./comps/Die"
import { nanoid } from "nanoid"

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

    function gameWin(){
      
    }

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}