import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor(){
        super()
        this.state = {
            // result = 0,
            // num = 0,
            // sign = " "
        }
    }
numClick = (e) => {
    e.preventDefault()
    console.log("this is what I clicked", e.target.value)
}
render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.numClick} value="7">7</button>
                    <button className="calc-button" onClick={this.numClick} value="8">8</button>
                    <button className="calc-button" onClick={this.numClick} value="9">9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.numClick} value="4">4</button>
                    <button className="calc-button" onClick={this.numClick} value="5">5</button>
                    <button className="calc-button" onClick={this.numClick} value="6">6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.numClick} value="1" >1</button>
                    <button className="calc-button" onClick={this.numClick} value="2">2</button>
                    <button className="calc-button" onClick={this.numClick} value="3">3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.numClick} value="0">0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator