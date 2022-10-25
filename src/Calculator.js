import React, { useState } from 'react'


export default function Calculator() {
    // Declare state variables

  

    let [num, setNum] = useState('')
    let [firstNum, setFirstNum] = useState('')
    let [operator, setOperator] = useState('')
    let [result, setResult] = useState('')
    let [error, setError] = useState('')

    

    const numPressed = (e) => {
        if (e.target.value !== '0' || num !== '') {
            setNum(num + e.target.value)
        }
    }
    const operatorClick = (e) => {
        setOperator(operator = e.target.value)
        setNum('')
        setFirstNum(num)  
      

    }

    const equalClick = (e) =>{

            e.preventDefault()
        
            if(!firstNum || !operator) {
              setError('Please enter a valid expression')
            }
            else if(!num) {
              setError('Please select a second number')
            }
            else {
    
        
              if(!operator || operator === '+') {
                result = (Number(firstNum) + Number(num)).toString()
              }
              else if(operator === '-') {
                result = (Number(firstNum) - Number(num)).toString()
              }
              else if(operator === 'x') {
                result = (Number(firstNum) * Number(num)).toString()
              }
              else if(operator === '/') {
                result = (Number(firstNum) / Number(num)).toString()
              }
              else if(operator === '%') {
                result = (Number(firstNum) % Number(num)).toString()
              }
        
              //Set the result to display
              let newresult = result.slice(0, 10)
        
              // Update state
              setResult(newresult)
              setError('')
            }
          
        }
        


    const clearClick = () =>{
        setFirstNum('')
        setNum('')
        setOperator('')
        setResult('')
    }
    const negative = () =>{
        setNum(num * -1)
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {result}</p>
                <div className="result-box"> {firstNum}{operator}{num} </div>
                <div className="calc-row">
                    <button onClick={clearClick} className="calc-button calc-button-top">AC</button>
                    <button onClick={negative} className="calc-button calc-button-top">+/-</button>
                    <button onClick={operatorClick} value="%" className="calc-button calc-button-top">%</button>
                    <button onClick={operatorClick} value="/"className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={numPressed} value="7" className="calc-button">7</button>
                    <button onClick={numPressed} value="8" className="calc-button">8</button>
                    <button onClick={numPressed} value="9" className="calc-button">9</button>
                    <button onClick={operatorClick} value="x" className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={numPressed} value="4" className="calc-button">4</button>
                    <button onClick={numPressed} value="5" className="calc-button">5</button>
                    <button onClick={numPressed} value="6" className="calc-button">6</button>
                    <button onClick={operatorClick} value="-" className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={numPressed} value="1" className="calc-button">1</button>
                    <button onClick={numPressed} value="2" className="calc-button">2</button>
                    <button onClick={numPressed} value="3" className="calc-button">3</button>
                    <button onClick={operatorClick} value="+" className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={numPressed} value="0" className="calc-button width-2">0</button>
                    <button onClick={numPressed} value="." className="calc-button">.</button>
                    <button onClick={equalClick} value="=" className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )

}

