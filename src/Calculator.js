import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor(props) {
        super(props)
        this.state = {
            total:''
        }
    }

    numberInput = (e) => {
        console.log('number is clicked')
    }

    signInput = (e) => {
        console.log('operator is clicked')
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
                    <button onClick={this.signInput} className="calc-button calc-button-top">+/-</button>
                    <button onClick={this.signInput} className="calc-button calc-button-top">%</button>
                    <button onClick={this.signInput} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numberInput} className="calc-button">7</button>
                    <button onClick={this.numberInput} className="calc-button">8</button>
                    <button onClick={this.numberInput} className="calc-button">9</button>
                    <button onClick={this.signInput} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numberInput} className="calc-button">4</button>
                    <button onClick={this.numberInput} className="calc-button">5</button>
                    <button onClick={this.numberInput} className="calc-button">6</button>
                    <button onClick={this.signInput} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numberInput} className="calc-button">1</button>
                    <button onClick={this.numberInput} className="calc-button">2</button>
                    <button onClick={this.numberInput} className="calc-button">3</button>
                    <button onClick={this.signInput} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numberInput} className="calc-button width-2">0</button>
                    <button onClick={this.numberInput} className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator