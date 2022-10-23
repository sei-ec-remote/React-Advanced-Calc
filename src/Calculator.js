import React, { Component, useEffect } from 'react'
import TheButtons from './components/TheButtons'

class Calculator extends Component {

    // Declare state variables
    state = {
        inputValue: '',
        storedValue: '',
        operator: '',
        output: ''
    }

    clear = () => {
        this.setState({
            inputValue: '',
            storedValue: '',
            operator: '',
            output: ''
        }, this.showOutput)
    }

    inputChar = (e) => {
        const newInputState = this.state.inputValue + e.target.innerText
        this.setState({
            inputValue: newInputState
        }, this.showInput)
    }

    inputOp = (e) => {
        this.setState({
            operator: e.target.innerText,
            storedValue: this.state.inputValue,
            inputValue: ''
        })
    }

    negate = () => {
        const newInputState = this.state.inputValue * -1
        this.setState({
            inputValue: newInputState
        }, this.showInput)
    }

    evaluate = () => {
        let answer = null
        const x = parseFloat(this.state.storedValue)
        const y = parseFloat(this.state.inputValue)
        switch (this.state.operator) {
            case '+':
                answer = x + y
                break              
            case '-':
                answer = x - y
                break
            case 'x':
                answer = x * y
                break
            case '/':
                answer = x / y
                break
            case '%':
                answer = x % y
                break
            default:
                break
        }
        this.clear()
        this.setState({
            output: answer,
            inputValue: answer
        }, this.showOutput)
    }

    showOutput = () => {
        const display = document.getElementById('display')
        display.innerText = this.state.output
    }

    showInput = () => {
        const display = document.getElementById('display')
        display.innerText = this.state.inputValue
    }

    render() {
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box" id="display">TBD</div>
                    <TheButtons
                        clear = {this.clear}
                        inputChar = {this.inputChar}
                        inputOp = {this.inputOp}
                        negate = {this.negate}
                        evaluate = {this.evaluate}

                    />
                </div>
            </div>
        )
    }
}

export default Calculator