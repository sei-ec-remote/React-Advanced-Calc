import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables

state = {
    operator: '',
    operation: '',
    num: '',
    display: '0',
    total: ''
}

displayNum = (e) => {
    console.log(e.target.innerText)
}

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.display}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.displayNum}>7</button>
                    <button className="calc-button" onClick={this.displayNum}>8</button>
                    <button className="calc-button" onClick={this.displayNum}>9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.displayNum}>4</button>
                    <button className="calc-button" onClick={this.displayNum}>5</button>
                    <button className="calc-button" onClick={this.displayNum}>6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.displayNum}>1</button>
                    <button className="calc-button" onClick={this.displayNum}>2</button>
                    <button className="calc-button" onClick={this.displayNum}>3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.displayNum}>0</button>
                    <button className="calc-button" onClick={this.displayNum}>.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator