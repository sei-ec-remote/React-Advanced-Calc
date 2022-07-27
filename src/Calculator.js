import React, { Component } from 'react'

class Calculator extends Component {
    state = {
        
        operator: '',
        num1: '',
        num2: '',        
        operation: '',               
        equals: '0'
    }

    clearAll = (e) => {
        this.setState(() => {
            return {
                operator: '',
                num1: '',
                num2: '',
                operation: '',
                equals: ''
            }
        })
    }

    numDisplay = (e) => {
        console.log(e.target.innerText)
    }

    handlePlus = () => {
        const newSum = parseInt(this.state.num1) + parseInt(this.state.num2)
        this.setState(() => {
            return {
                result: newSum,
            }
        })
    }

    handleMinus = () => {
        const newSum = parseInt(this.state.num1) - parseInt(this.state.num2)
        this.setState(() => {
            return {
                result: newSum,
            }
        })
    }

    handleMultiply = () => {
        const newSum = parseInt(this.state.num1) * parseInt(this.state.num2)
        this.setState(() => {
            return {
                result: newSum,
            }
        })
    }

    handleDevide = () => {
        const newSum = parseInt(this.state.num1) / parseInt(this.state.num2)
        this.setState(() => {
            return {
                result: newSum,
            }
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
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.numDisplay}>7</button>
                    <button className="calc-button" onClick={this.numDisplay}>8</button>
                    <button className="calc-button" onClick={this.numDisplay}>9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.numDisplay}>4</button>
                    <button className="calc-button" onClick={this.numDisplay}>5</button>
                    <button className="calc-button" onClick={this.numDisplay}>6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.numDisplay}>1</button>
                    <button className="calc-button" onClick={this.numDisplay}>2</button>
                    <button className="calc-button" onClick={this.numDisplay}>3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                        <button className="calc-button width-2" onClick={this.numDisplay}>0</button>
                        <button className="calc-button" onClick={this.numDisplay}>.</button>
                        <button className="calc-button calc-button-op">=</button>
                    </div>
            </div>
        </div>
    )
}
}

export default Calculator