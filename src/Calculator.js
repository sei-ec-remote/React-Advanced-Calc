import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        operator: null,
        num1: '',
        num2: '',
        answer: ''
    }
    

    // DISPLAY NUMBER
    handleDisplayNum = (e) => {
        // test out innerText
        // console.log(e.target.innerText)
        
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
        }
    }

    handleAddSubtract = (e) => {
        // console.log(e.target.innerText)
        if (this.state.operator !== "+") {
            this.setState({
                operator: "+",
            })
        } else if (this.state.operator === "+") {
            this.setState({
                operator: "-"
            })
        }
    }

    // // adding func
    // handleAdd = () => {
    //     console.log("Add this monayyy")
    //     const newSum = parseInt(this.state.num1) + parseInt(this.state.num2)
    //     this.setState(() => {
    //         return {
    //             result: newSum,
    //         }
    //     })
    // }
    // // subtr func
    // handleSubtract = () => {
    //     console.log("I am broke...")
    //     const newSum = parseInt(this.state.num1) - parseInt(this.state.num2)
    //     this.setState(() => {
    //         return {
    //             result: newSum,
    //         }
    //     })
    // }
    // // multi func
    // handleMultiply = () => {
    //     console.log("multiply")
    //     const newSum = parseInt(this.state.num1) * parseInt(this.state.num2)
    //     this.setState(() => {
    //         return {
    //             result: newSum,
    //         }
    //     })
    // }
    // // divide func
    // handleDivide = () => {
    //     console.log("Yo! Split that number!")
    //     const newSum = parseInt(this.state.num1) / parseInt(this.state.num2)
    //     this.setState(() => {
    //         return {
    //             result: newSum,
    //         }
    //     })
    // }

    handleAssignOperator = (e) => {
        // test inner text first
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

    // CLEAR ALL FUNCTION
    handleClearAll = (e) => {
        // console.log(e.target.innerText)
        this.setState(() => {
            return {
                operator: null,
                num1: '',
                num2: '',
                answer: ''
            }
        })
    }
    
    ///////////////////
    // RENDER ON THE SCREEN //
    //////////////////////////


render(){
// display on the calculator


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.num1} {this.state.operator} = {this.state.answer}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.handleClearAll}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top" onClick={this.handlePercent}>%</button>
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
                    <button className="calc-button" onClick={this.displayNum}>1</button>
                    <button className="calc-button" onClick={this.displayNum}>2</button>
                    <button className="calc-button" onClick={this.displayNum}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.handleAssignOperator}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.handleDisplayNum}>0</button>
                    <button className="calc-button" onClick={this.handleDisplayNum}>.</button>
                    <button className="calc-button calc-button-op"onClick={this.handleOperationTotal}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator