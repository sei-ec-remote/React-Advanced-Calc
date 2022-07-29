import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables

state = {
    operator: null,
    // operation: '',
    num1: '',
    num2: '',
    total: '0'
}
handleClearAll = (e) => {
    this.setState(() => {
        return {
            operator: null,
            // operation: '',
            num1: '',
            num2: '',
            total: ''
        }
    })
}

handleDisplayNum = (e) => {
    console.log(e.target.innerText)
    if (this.state.num1 === "0") {
        this.setState({
            num1: ""
        })
    } else if (this.state.operator === null) {
        this.setState({
            num1: (this.state.num1) + (e.target.innerText),
        })
    } else if (this.state.operator !== null) {
        this.setState({
            num2: this.state.num2 + e.target.innerText
        })
    } else {this.setState }
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

handleAssignOperator = (e) => {
    // console.log(e.target.innerText)
   this.setState({
    operator: e.target.innerText
   })
}

handleOperationTotal = (e) => {
//   console.log(e.target.innerText)
  this.setState({
    total: eval (
        parseInt(this.state.num1) + this.state.operator + parseInt(this.state.num2)
    )
  })
}

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.num1} {this.state.operator} {this.state.num2} = {this.state.total}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.handleClearAll}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={this.handleAssignOperator}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.handleDisplayNum}>7</button>
                    <button className="calc-button" onClick={this.handleDisplayNum}>8</button>
                    <button className="calc-button" onClick={this.handleDisplayNum}>9</button>
                    <button className="calc-button calc-button-op" onClick={this.handleAssignOperator}>*</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.handleDisplayNum}>4</button>
                    <button className="calc-button" onClick={this.handleDisplayNum}>5</button>
                    <button className="calc-button" onClick={this.handleDisplayNum}>6</button>
                    <button className="calc-button calc-button-op" onClick={this.handleAssignOperator}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.handleDisplayNum}>1</button>
                    <button className="calc-button" onClick={this.handleDisplayNum}>2</button>
                    <button className="calc-button" onClick={this.handleDisplayNum}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.handleAssignOperator}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.handleDisplayNum}>0</button>
                    <button className="calc-button" onClick={this.handleDisplayNum}>.</button>
                    <button className="calc-button calc-button-op" onClick={this.handleOperationTotal}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator