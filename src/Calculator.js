import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor(){
        super()
        this.state = {
            num1: "",
            num2: "",
            op: "",
            answer: "",
            // display: ""
            // [will add display if there is time.]
        }
    }
numClick = (e) => {
    e.preventDefault()
    // console.log("this is the number I clicked:", e.target.value)
    let num = e.target.value
    // console.log("this is num", num)
    if (this.state.op === "") {
        
        this.setState({
            num1: [...this.state.num1, num]
        })
        console.log("this is num1",this.state.num1)
    }else{
        this.setState({
            num2: [...this.state.num2, num]
        })
        console.log("this is num2", this.state.num2)
    }
}

opClick = (e) => {
    e.preventDefault()
    // console.log("this is the operator I clicked", e.target.value)
    let operator = e.target.value
    this.setState({
        op: operator
    })
}

equalClick = (e) => {
    e.preventDefault()
    // console.log("I clicked equals!", e.target.value)
    // console.log("this is num1",this.state.num1)
    let rlNum1 = parseFloat(this.state.num1.join(""))
    // console.log("this is num1 turned into a real number", rlNum1)
    let rlNum2 = parseFloat(this.state.num2.join(""))
    // console.log("this is num2 turned into a real number", rlNum2)
    if (this.state.op === "+") {
        this.setState({
            answer: rlNum1 + rlNum2
        })
    } else if (this.state.op === "-") {
        this.setState({
            answer: rlNum1 - rlNum2
        })
    } else if (this.state.op === "x") {
        this.setState({
            answer: rlNum1 * rlNum2
        })
    } else if (this.state.op === "/") {
        this.setState({
            answer: rlNum1 / rlNum2
        })
    } else {
        this.setState({
            answer: "error"
        })
    }
}
clearAll = (e) => {
    // console.log("CLEAR WORKS!")
    this.setState({
        num1: "",
        num2: "",
        op: "",
        answer: "",
    })
}
render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.num1}{this.state.op}{this.state.num2}={this.state.answer}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.clearAll} value="AC">AC</button>
                    <button className="calc-button calc-button-top" onClick={this.opClick} value="+/-">+/-</button>
                    <button className="calc-button calc-button-top" onClick={this.opClick} value="%">%</button>
                    <button className="calc-button calc-button-op" onClick={this.opClick} value="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.numClick} value="7">7</button>
                    <button className="calc-button" onClick={this.numClick} value="8">8</button>
                    <button className="calc-button" onClick={this.numClick} value="9">9</button>
                    <button className="calc-button calc-button-op" onClick={this.opClick} value="x">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.numClick} value="4">4</button>
                    <button className="calc-button" onClick={this.numClick} value="5">5</button>
                    <button className="calc-button" onClick={this.numClick} value="6">6</button>
                    <button className="calc-button calc-button-op" onClick={this.opClick} value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.numClick} value="1" >1</button>
                    <button className="calc-button" onClick={this.numClick} value="2">2</button>
                    <button className="calc-button" onClick={this.numClick} value="3">3</button>
                    <button className="calc-button calc-button-op" onClick={this.opClick} value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.numClick} value="0">0</button>
                    <button className="calc-button" onClick={this.numClick} value=".">.</button>
                    <button className="calc-button calc-button-op" onClick={this.equalClick} value="=">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator