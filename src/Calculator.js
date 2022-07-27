import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables

state = {
    operator: '',
    operation: '',
    num1: '',
    num2: '',
    total: '0'
}
clearAll = (e) => {
    this.setState(() => {
        return {
            operator: '',
            operation: '',
            num1: '',
            num2: '',
            total: ''
        }
    })
}

displayNum = (e) => {
    console.log(e.target.innerText)
}

//Operations
handleAdd = () => {
    console.log('add')
    const newSum = parseInt(this.state.num1) + parseInt(this.state.num2)
    this.setState(() => {
        return {
            result: newSum,
        }
    })
}
handleSubtract = () => {
    console.log('subtract')
    const newSum = parseInt(this.state.num1) - parseInt(this.state.num2)
    this.setState(() => {
        return {
            result: newSum,
        }
    })
}
handleMultiply = () => {
    console.log('multiply')
    const newSum = parseInt(this.state.num1) * parseInt(this.state.num2)
    this.setState(() => {
        return {
            result: newSum,
        }
    })
}
handleDivide = () => {
    console.log('divide')
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
                    <button className="calc-button calc-button-top" onClick={this.clearAll}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={this.handleDivide}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.displayNum}>7</button>
                    <button className="calc-button" onClick={this.displayNum}>8</button>
                    <button className="calc-button" onClick={this.displayNum}>9</button>
                    <button className="calc-button calc-button-op" onClick={this.handleMultiply}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.displayNum}>4</button>
                    <button className="calc-button" onClick={this.displayNum}>5</button>
                    <button className="calc-button" onClick={this.displayNum}>6</button>
                    <button className="calc-button calc-button-op" onClick={this.handleSubtract}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.displayNum}>1</button>
                    <button className="calc-button" onClick={this.displayNum}>2</button>
                    <button className="calc-button" onClick={this.displayNum}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.handleAdd}>+</button>
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