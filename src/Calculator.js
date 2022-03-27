import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor(props) {
        super (props)
        this.state = {
            input1: [],
            input2: [],
            operator: [],
            answer: []
        }
    }
    setInputs = (e) =>{
        if(this.state.operator.length ===0){
            let buttonNum = e.target.innerText
            this.setState({
                    input1: [...this.state.input1, buttonNum]
            })
        } else {
            let buttonNum = e.target.innerText
            this.setState({
                    input2: [...this.state.input2, buttonNum]
            })
        }
    }
    clearDisplay = (e) =>{
        this.setState({
            input1: [],
            input2: [],
            operator: [],
            answer: []
        })
    }
    setOperator = (e) =>{
        this.setState({
            operator: e.target.innerText
        })
        console.log(this.state.operator)
    }
    runMath = () =>{
        if(this.state.operator === '+'){
            let num1 = parseFloat(this.state.input1.join(''))
            let num2 = parseFloat(this.state.input2.join(''))
            this.setState({
                answer: (num1 + num2)
            })
        } else if(this.state.operator === '-'){
            let num1 = parseFloat(this.state.input1.join(''))
            let num2 = parseFloat(this.state.input2.join(''))
            this.setState({
                answer: (num1 - num2)
            })
        } else if(this.state.operator === 'x'){
            let num1 = parseFloat(this.state.input1.join(''))
            let num2 = parseFloat(this.state.input2.join(''))
            this.setState({
                answer: (num1 * num2)
            })
        } else if(this.state.operator === '/'){
            let num1 = parseFloat(this.state.input1.join(''))
            let num2 = parseFloat(this.state.input2.join(''))
            this.setState({
                answer: (num1 / num2)
            })
        }
    }
render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">
                    <p>{this.state.input1}{this.state.operator}{this.state.input2}</p>
                    <p>{this.state.answer}</p>
                </div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.clearDisplay}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={this.setOperator}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.setInputs}>7</button>
                    <button className="calc-button" onClick={this.setInputs}>8</button>
                    <button className="calc-button" onClick={this.setInputs}>9</button>
                    <button className="calc-button calc-button-op" onClick={this.setOperator}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.setInputs}>4</button>
                    <button className="calc-button" onClick={this.setInputs}>5</button>
                    <button className="calc-button" onClick={this.setInputs}>6</button>
                    <button className="calc-button calc-button-op" onClick={this.setOperator}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.setInputs}>1</button>
                    <button className="calc-button" onClick={this.setInputs}>2</button>
                    <button className="calc-button" onClick={this.setInputs}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.setOperator}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.setInputs}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={this.runMath}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator