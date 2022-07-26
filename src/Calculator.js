import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        // need to store operator
        operator: '',
        // need to store values
        num1: '',
        // this will store whole operation
        operation: '',
        // store display/result
        result: '0',
    }
    ///////////////////////
    // Display Functions
    ///////////////////////
    addNumberToDisplay = (e) => {
        console.log(e.target.innerText)
        // we want this number to be added to display
        // if the first number, then replace '0'
    }
    setOperator = (e) => {
        console.log(e.target.innerText)
    }
    ///////////////////////
    // Operation Functions
    ///////////////////////
    handleOperation = () => {
        let newSum;
        // use switch cases for operations
        switch (this.state.operator) {
            case '+':
                newSum = parseInt(this.state.num1) + parseInt(this.state.num2);
                break;
            case '-':
                newSum = parseInt(this.state.num1) - parseInt(this.state.num2);
                break;
            case 'x':
                newSum = parseInt(this.state.num1) * parseInt(this.state.num2);
                break;
            case '/':
                newSum = parseInt(this.state.num1) / parseInt(this.state.num2)
                break;
            default:
                console.log('there has been an error!')
        }
        this.setState(() => {
            return {
                result: newSum,
            }
        })
    }
    ///////////////////////
    // Render
    ///////////////////////
    render(){
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">
                        {this.state.display}
                    </div>
                    <div className="calc-row">
                        <button className="calc-button calc-button-top">AC</button>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button className="calc-button calc-button-top">%</button>
                        <button className="calc-button calc-button-op">/</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={this.addNumberToDisplay}>7</button>
                        <button className="calc-button" onClick={this.addNumberToDisplay}>8</button>
                        <button className="calc-button" onClick={this.addNumberToDisplay}>9</button>
                        <button className="calc-button calc-button-op">x</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={this.addNumberToDisplay}>4</button>
                        <button className="calc-button" onClick={this.addNumberToDisplay}>5</button>
                        <button className="calc-button" onClick={this.addNumberToDisplay}>6</button>
                        <button className="calc-button calc-button-op">-</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={this.addNumberToDisplay}>1</button>
                        <button className="calc-button" onClick={this.addNumberToDisplay}>2</button>
                        <button className="calc-button" onClick={this.addNumberToDisplay}>3</button>
                        <button className="calc-button calc-button-op">+</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button width-2" onClick={this.addNumberToDisplay}>0</button>
                        <button className="calc-button" onClick={this.addNumberToDisplay}>.</button>
                        <button className="calc-button calc-button-op">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator