import React, { useState } from 'react'


const Calculator = () => {
    // Declare state variables
    

  const [count, setCount] = useState(0)
  
  const numPressed = (e) => {
    if (e.target.value !== '0' || count !== '') {
      setCount(count + e.target.value)
    }
  }

  

    

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box"> {count} </div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={numPressed} value="7" className="calc-button">7</button>
                    <button onClick={numPressed} value="8" className="calc-button">8</button>
                    <button onClick={numPressed} value="9" className="calc-button">9</button>
                    <button onClick={numPressed} value="x" className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={numPressed} value="4" className="calc-button">4</button>
                    <button onClick={numPressed}value="5" className="calc-button">5</button>
                    <button onClick={numPressed}value="6" className="calc-button">6</button>
                    <button onClick={numPressed}value="-" className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={numPressed} value="1" className="calc-button">1</button>
                    <button onClick={numPressed} value="2" className="calc-button">2</button>
                    <button onClick={numPressed} value="3" className="calc-button">3</button>
                    <button onClick={numPressed} value="+" className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={numPressed} value="0"className="calc-button width-2">0</button>
                    <button onClick={numPressed} value="." className="calc-button">.</button>
                    <button onClick={numPressed} value="=" className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )

}

export default Calculator