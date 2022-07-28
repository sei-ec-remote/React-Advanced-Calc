import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        num1: '',
        num2: '',
        operator: null,
        total: ''
    }

    answer = false
    handleClear = (e) => {
        this.setState({
            num1: '',
            num2: '',
            operator: null,
            total: ''
        })
    }
    
    handleNumber = (e) => {

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

    handleOperator = (e) => {
        this.setState({
            operator: e.target.innerText
        })
    }

    handleCalc = (e) => {
        this.setState({
            total: eval(
                parseInt(this.state.num1) + this.state.operator + parseInt(this.state.num2)
            )
        })
    }


    render () {
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">{this.state.num1} {this.state.operator} {this.state.num2} => {this.state.total}</div>
                    <div className="calc-row">
                        <button onClick={this.handleClear} className="calc-button calc-button-top">AC</button>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button className="calc-button calc-button-top">%</button>
                        <button onClick={this.handleOperator} className="calc-button calc-button-op">/</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.handleNumber} className="calc-button">7</button>
                        <button onClick={this.handleNumber} className="calc-button">8</button>
                        <button onClick={this.handleNumber} className="calc-button">9</button>
                        <button onClick={this.handleOperator} className="calc-button calc-button-op">*</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.handleNumber} className="calc-button">4</button>
                        <button onClick={this.handleNumber} className="calc-button">5</button>
                        <button onClick={this.handleNumber} className="calc-button">6</button>
                        <button onClick={this.handleOperator} className="calc-button calc-button-op">-</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.handleNumber} className="calc-button">1</button>
                        <button onClick={this.handleNumber} className="calc-button">2</button>
                        <button onClick={this.handleNumber} className="calc-button">3</button>
                        <button onClick={this.handleOperator} className="calc-button calc-button-op">+</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.handleNumber} className="calc-button width-2">0</button>
                        <button className="calc-button">.</button>
                        <button onClick={this.handleCalc} className="calc-button calc-button-op">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator