import React, { useState } from 'react'


const Calculator = () => {
    const [ calc, setCalc ] = useState("")
    const [ result, setResult ] = useState("")
    const ops = ['/', '*', '+', '-', '.']

    const updateCalc = (val) => {
        if ( 
            ops.includes(val) && calc === '' || 
            ops.includes(val) && ops.includes(calc.slice(-1))
        ) {
            return
        }

        setCalc( calc + val )

        if (!ops.includes(val)) {
            setResult(eval(calc + val).toString())
        }
    }

    const calculate = () => {
        setCalc(eval(calc).toString())
    }

    const clearAll = () => {
        setCalc('')
        setResult('')
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{result ? <span>({result})</span> : '' } { calc || "0" }</div>
                <div className="calc-row">
                    <button onClick={clearAll} className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button onClick={() => updateCalc('/')} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => updateCalc(7)} className="calc-button">7</button>
                    <button onClick={() => updateCalc(8)} className="calc-button">8</button>
                    <button onClick={() => updateCalc(9)} className="calc-button">9</button>
                    <button onClick={() => updateCalc('*')} className="calc-button calc-button-op">*</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => updateCalc(4)} className="calc-button">4</button>
                    <button onClick={() => updateCalc(5)} className="calc-button">5</button>
                    <button onClick={() => updateCalc(6)} className="calc-button">6</button>
                    <button onClick={() => updateCalc('-')} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => updateCalc(1)} className="calc-button">1</button>
                    <button onClick={() => updateCalc(2)} className="calc-button">2</button>
                    <button onClick={() => updateCalc(3)} className="calc-button">3</button>
                    <button onClick={() => updateCalc('+')} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => updateCalc(0)} className="calc-button width-2">0</button>
                    <button onClick={() => updateCalc('.')} className="calc-button">.</button>
                    <button onClick={calculate} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}


export default Calculator