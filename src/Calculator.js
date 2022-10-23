import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        operator: '',
        value1: '',
        value2: '',
        solution: '',
    }



    render(){
        return (
            <div className="container">
                <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={() => {
                    console.log('resets values to defaults')}}>AC</button>
                    <button className="calc-button calc-button-top" onClick={() => {
                    console.log('test')
                }}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={() => {
                    console.log('test')
                }}>%</button>
                    <button className="calc-button calc-button-op" onClick={() => {
                    console.log('divide value1 and value2')
                }}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => {
                    console.log('value #7')
                }}>7</button>
                    <button className="calc-button" onClick={() => {
                    console.log('value #8')
                }}>8</button>
                    <button className="calc-button" onClick={() => {
                    console.log('value #9')
                }}>9</button>
                    <button className="calc-button calc-button-op" onClick={() => {
                    console.log('multiply value1 and value2')
                }}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => {
                    console.log('value #4')
                }}>4</button>
                    <button className="calc-button" onClick={() => {
                    console.log('value #5')
                }}>5</button>
                    <button className="calc-button" onClick={() => {
                    console.log('value #6')
                }}>6</button>
                    <button className="calc-button calc-button-op" onClick={() => {
                    console.log('subtract value1 and value2')
                }}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => {
                    console.log('value #1')
                }}>1</button>
                    <button className="calc-button" onClick={() => {
                    console.log('value #2')
                }}>2</button>
                    <button className="calc-button" onClick={() => {
                    console.log('value#3')
                }}>3</button>
                    <button className="calc-button calc-button-op" onClick={() => {
                    console.log('add value1 and value2')
                }}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={() => {
                    console.log('value #0')
                }}>0</button>
                    <button className="calc-button" onClick={() => {
                    console.log('decimal')
                }}>.</button>
                    <button className="calc-button calc-button-op" onClick={() => {
                    console.log('get the solution')
                }}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator