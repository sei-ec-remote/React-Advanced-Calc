import React, { Component } from 'react'

class Calculator extends Component {
    state = {
        operator: '',

        num1: '',

        num2: '',

        operation: '',

        // display: '0',

        total:'0', 
    }

clearDisplay = (e) => {
    this.setState(()=>{
        return {
            operator: '',
            num1: '', 
            num2: '',
            operation: '',
            total: '',
        }
    })
    console.log("Clear button clicked")
}




displayNum = (e) => {
    e.preventDefault()
    const displayNum = e.target.innerText
    console.log('Number button is clicked')
    this.setState((prevState) =>{
        return{
            total: prevState.displayNum
        }
    })
}

handleAdd = () => {
    const newTotal = parseInt(this.state.num1) + parseInt(this.state.num2)
    console.log("Add button clicked")
    this.setState(()=>{
        return {
            total: newTotal
        }
    })
}

handleSubtract = () => {
    const newTotal = parseInt(this.state.num1) - parseInt(this.state.num2)
    console.log("Subtract button clicked")
    this.setState(()=>{
        return {
            total: newTotal
        }
    })
}

handleDivide = () => {
    const newTotal = parseInt(this.state.num1) / parseInt(this.state.num2)
    console.log("Divide button clicked")
    this.setState(()=>{
        return {
            total: newTotal
        }
    })
}

handleMultiply = () => {
    const newTotal = parseInt(this.state.num1) * parseInt(this.state.num2)
    console.log("Multiply button clicked")
    this.setState(()=>{
        return {
            total: newTotal
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
                    <button className="calc-button calc-button-top" onClick={this.clearDisplay}>AC</button>
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