import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor(props) {
        super(props)
        this.state = {
            num1:'',
            num2:'',
            total:'',
            operator:''
        }
    }

    numberInput = (e) => {
        console.log('number is clicked')
        let newNumber = this.state.num1 + e
        if(parseInt(this.state.num1) == parseInt(this.state.num2)){
            this.setState({
                num1:e
            })
        } else {
            this.setState({
                num1:newNumber
            })
        }
    }

    signInput = (e) => {
        console.log('operator is clicked')
    }

    clearInput = () => {
        console.log('clear calc')
    }

    resultInput = () => {
        console.log('result is clicked')
    }

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.num1}</div>
                <div className="calc-row">
                    <button onClick={this.clearInput} className="calc-button calc-button-top">AC</button>
                    <button onClick={this.signInput} className="calc-button calc-button-top">+/-</button>
                    <button onClick={this.signInput} className="calc-button calc-button-top">%</button>
                    <button onClick={this.signInput} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numberInput} className="calc-button">7</button>
                    <button onClick={this.numberInput} className="calc-button">8</button>
                    <button onClick={this.numberInput} className="calc-button">9</button>
                    <button onClick={this.signInput} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numberInput} className="calc-button">4</button>
                    <button onClick={this.numberInput} className="calc-button">5</button>
                    <button onClick={this.numberInput} className="calc-button">6</button>
                    <button onClick={this.signInput} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numberInput} className="calc-button">1</button>
                    <button onClick={this.numberInput} className="calc-button">2</button>
                    <button onClick={this.numberInput} className="calc-button">3</button>
                    <button onClick={this.signInput} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numberInput} className="calc-button width-2">0</button>
                    <button onClick={this.numberInput} className="calc-button">.</button>
                    <button onClick={this.resultInput} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator