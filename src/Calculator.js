import React, { Component } from 'react'
import InputButton from './components/InputButton'

class Calculator extends Component {

    // Declare state variables
    state = {
        input: 'asd',
        operator: 'asd',
        output: 'asd'
    }

    clear = () => {
        this.setState({
            input: '',
            operator: '',
            output: ''
        })
    }

    inputInput = (e) => {
        const char = e.target.innerText
        this.setState({
            input: char
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
                        <button className="calc-button">7</button>
                        <button className="calc-button">8</button>
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
                        <button className="calc-button calc-button-op">+</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button width-2">0</button>
                        <button className="calc-button">.</button>
                        <button className="calc-button calc-button-op">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator