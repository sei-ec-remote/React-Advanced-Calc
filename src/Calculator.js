import React, { useState } from 'react'

const Calculator = ()  => {
    // Declare state variables
    const [operator, setOperator] = useState('')
    const [firstNumber, setFirst] = useState('')
    const [nextNumber, setNext] = useState('')
    const [answer, setAnswer] = useState(0)
    const [negOrPos, setSign] = useState('+')


    const handleNumberSelect = (e) => {
        // console.log(nextNumber)
        if (e.target.innerText) {
            setNext(nextNumber + e.target.innerText)
        } else {
            return <p>Invalid input, select a number</p>
        }
    }

    const handleSignSelect = () => {
        if (nextNumber) {
            setNext(nextNumber * -1)
        }
    }

    const handleOperator = (e) => {
        if (operator) {
            return <p>Invalid input, cannot select more than one operator</p>
        } else if (e.target.innerText === '+' || e.target.innerText === '-' || e.target.innerText === '/' || e.target.innerText === 'x' ) {
            // console.log(firstNumber)
            setOperator(e.target.innerText)
            setFirst(nextNumber)
            setNext('')
        } else {
            return <p>Invalid</p>
        }
    }    

    const handleCalculate = () => {
        if (! nextNumber) {
            return <p>Invalid, select another number</p>
        } else {
            setFirst(Number(firstNumber))
            setNext(Number(nextNumber))
            if (operator === '+') {
                setAnswer(Number(firstNumber) + Number(nextNumber))
            } else if (operator === '-') {
                setAnswer(Number(firstNumber) - Number(nextNumber))
            } else if (operator === 'x') {
                setAnswer(Number(firstNumber) * Number(nextNumber))
            } else {
                setAnswer(Number(firstNumber) / Number(nextNumber))
            }
        }
    }

    const handleClear = () => {
        setOperator('')
        setAnswer(0)
        setNext('')
        setFirst('')
        setSign('+')
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {firstNumber} {operator} {nextNumber}</p>
                <div className="answer-box">{answer}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={handleClear}>AC</button>
                    <button className="calc-button calc-button-top" onClick={handleSignSelect}>+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={handleOperator}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleNumberSelect}>7</button>
                    <button className="calc-button" onClick={handleNumberSelect}>8</button>
                    <button className="calc-button" onClick={handleNumberSelect}>9</button>
                    <button className="calc-button calc-button-op" onClick={handleOperator}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleNumberSelect}>4</button>
                    <button className="calc-button" onClick={handleNumberSelect}>5</button>
                    <button className="calc-button" onClick={handleNumberSelect}>6</button>
                    <button className="calc-button calc-button-op" onClick={handleOperator}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleNumberSelect}>1</button>
                    <button className="calc-button" onClick={handleNumberSelect}>2</button>
                    <button className="calc-button" onClick={handleNumberSelect}>3</button>
                    <button className="calc-button calc-button-op" onClick={handleOperator}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={handleNumberSelect}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={handleCalculate}>=</button>
                </div>
            </div>
        </div>
    )
}


export default Calculator