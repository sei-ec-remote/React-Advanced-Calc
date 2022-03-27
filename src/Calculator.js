import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor() {
            super()
            this.state = {
               display: []

            }
        }
    handleClick = (e) => {
        let buttonNum = e.target.innerText
            this.setState(() => {
                return{
                    display: [...this.state.display, buttonNum]
                }
            })
        }
clearDisplay = (e) => {
    this.setState({
        display: []
    })
}

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.display}</div>
                <div className="calc-row">
                    <button onClick={this.clearDisplay}className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleClick}className="calc-button">7</button>
                    <button onClick={this.handleClick}className="calc-button">8</button>
                    <button onClick={this.handleClick}className="calc-button">9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleClick}className="calc-button">4</button>
                    <button onClick={this.handleClick}className="calc-button">5</button>
                    <button onClick={this.handleClick}className="calc-button">6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleClick}className="calc-button">1</button>
                    <button onClick={this.handleClick}className="calc-button">2</button>
                    <button onClick={this.handleClick}className="calc-button">3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleClick}className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator