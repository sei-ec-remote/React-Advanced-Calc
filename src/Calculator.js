import React, { Component } from 'react'
import InputButton from './components/InputButton'

class Calculator extends Component {

    // Declare state variables
    state = {
        inputValue: 'asd',
        storedValue: 'asd',
        operator: 'asd',
        output: 'asd'
    }

    clear = () => {
        this.setState({
            inputValue: '',
            storedValue: '',
            operator: '',
            output: ''
        })
    }

    inputChar = (e) => {
        let newInputState = this.state.inputValue + e.target.innerText
        this.setState({
            inputValue: newInputState
        })
    }

    inputOp = (e) => {
        this.setState({
            operator: e.target.innerText,
            storedValue: this.state.inputValue,
            inputValue: ''
        })
    }

    evaluate = () => {
        let answer = null
        let x = parseFloat(this.state.inputValue)
        let y = parseFloat(this.state.storedValue)
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
        }
        this.setState({
            output: answer
        })
    }

    render() {

        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">TBD</div>
                    <div className="calc-row">
                        <button onClick={this.clear} className="calc-button calc-button-top">AC</button>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button className="calc-button calc-button-top">%</button>
                        <button className="calc-button calc-button-op">/</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.inputChar} className="calc-button">7</button>
                        <button onClick={this.inputChar} className="calc-button">8</button>
                        <button className="calc-button">9</button>
                        <button className="calc-button calc-button-op">x</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button">4</button>
                        <button className="calc-button">5</button>
                        <button className="calc-button">6</button>
                        <button className="calc-button calc-button-op">-</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button">1</button>
                        <button className="calc-button">2</button>
                        <button className="calc-button">3</button>
                        <button onClick={this.inputOp} className="calc-button calc-button-op">+</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button width-2">0</button>
                        <button className="calc-button">.</button>
                        <button onClick={this.evaluate} className="calc-button calc-button-op">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator